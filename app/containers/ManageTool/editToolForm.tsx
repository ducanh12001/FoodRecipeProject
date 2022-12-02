import { Button, Col, Form, Image, Input, message, Row, Tooltip, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FormWrapper from '../../components/FormWrapper';
import { InfoCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import ImageUpload from './imageUpload';
import { useDispatch } from 'react-redux';
import { getToolByIdAction, setFormMethodAction, setFormValues, setIdAction, submitFormAction } from './actions';
import { makeErrorSelector, makeInitialValuesSelector, makeIsLoadingSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import homeMessages from 'containers/RecipeHome/messages';
import { FormattedMessage } from 'react-intl';
import { PUT } from 'utils/constants';
import messages from './messages';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 12 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 12 },
    sm: { span: 24 },
  },
};

const { Title, Text } = Typography;

const stateSelector = createStructuredSelector({
  loading: makeIsLoadingSelector(),
  errors: makeErrorSelector(),
  tool: makeInitialValuesSelector(),
});

function EditToolForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const { id } = useParams();
  const [form] = Form.useForm();

  const {
    errors, tool
  } = useSelector(stateSelector);

  const [imageLinks, setImageLinks] = useState(new Array<any>());
  const [existingImages, setExistingImages] = useState(new Array<any>());

  const onFinish = async () => {
    await form.validateFields();

    let formVal = form.getFieldsValue();
    dispatch(
      setFormValues({
        ...formVal,
        author_id: localStorage.getItem('USER_ID')
      })
    )
    dispatch(submitFormAction());
  }

  const onCancel = () => {
    navigate('/manage-tool');
  };

  const onImageUploaded = (images: Array<any>) => {
    setImageLinks(images);
  };

  useEffect(() => {
    if (errors?.length) {
      form.setFields(errors);
    }
  }, [errors]);

  useEffect(() => {
    if (id) {
      dispatch(setIdAction(id));
      dispatch(getToolByIdAction(id ?? ''));
    }
    dispatch(setFormMethodAction(PUT));
  }, []);


  useEffect(() => {
    form.resetFields();
  }, [tool])

  return (
    <>
      <FormWrapper
        {...formItemLayout}
        values={tool}
        forminstance={form}
        onFinish={onFinish}
        name="recipe-form"
        className="recipe-form"
      >
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                <FormInputWrapper
                  label={messages.titleCol}
                  name="title"
                  id="title"
                  type="text"
                  maxLength={200}
                  allowClear
                  required
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(homeMessages.require),
                    },
                  ]}
                />
                <FormInputWrapper
                  label={messages.contentCol}
                  name="content"
                  id="content"
                  required
                  textarea
                  rows={5}
                  maxLength={2000}
                  allowClear
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(homeMessages.require),
                    },
                  ]}
                />
              </Col>
            </Row>

            <Row gutter={16} className="mt-10">
              <Col>
                <Button
                  type={'primary'}
                  htmlType="button"
                  size="middle"
                  danger
                  onClick={onCancel}
                >
                  <FormattedMessage {...homeMessages.cancelBtn} />
                </Button>
              </Col>
              <Col>
                <FormButtonWrapper
                  variant="primary"
                  form={form}
                  label={homeMessages.submitBtn}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </FormWrapper>
    </>
  )
}

export default EditToolForm