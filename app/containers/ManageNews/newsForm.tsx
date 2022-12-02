import { Button, Col, Form, Image, Input, message, Row, Tooltip, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../../components/FormWrapper';
import { InfoCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import ImageUpload from './imageUpload';
import { useDispatch } from 'react-redux';
import { setFormMethodAction, setFormValues, submitFormAction } from './actions';
import { makeErrorSelector, makeIsLoadingSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import messages from './messages';
import homeMessages from 'containers/RecipeHome/messages';
import { FormattedMessage } from 'react-intl';
import { POST } from 'utils/constants';

const { Title, Text } = Typography;

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

const stateSelector = createStructuredSelector({
    loading: makeIsLoadingSelector(),
    errors: makeErrorSelector(),
  });


function NewsForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const intl = useIntl();
    const [form] = Form.useForm();
    const { loading, errors, } = useSelector(stateSelector);

    const [imageLinks, setImageLinks] = useState(new Array<any>());

    const onFinish = async () => {
        await form.validateFields();
        let productMedias = new Array<any>();
        if (imageLinks.length > 0) {
          productMedias = productMedias.concat(
            imageLinks.map((item, index) => {
                return item.path;
            }),
          );
        } 
        
        let formVal = form.getFieldsValue();
        dispatch(
            setFormValues({
                ...formVal,
                pictures: productMedias,
                author_id: localStorage.getItem('USER_ID')
            })
        )
        dispatch(submitFormAction());
    }

    const onCancel = () => {
        navigate('/manage-news');
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
        dispatch(setFormMethodAction(POST));
    }, []);
    
    return (
        <>
            <FormWrapper
                {...formItemLayout}
                forminstance={form}
                onFinish={onFinish}
                name="recipe-form"
                className="recipe-form"
            >
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <div className="product-media-description">
                                    <Text className="ant-form-item-label">
                                        <span className="add-form-label" style={{ marginRight: 6 }}><FormattedMessage {...homeMessages.photoLabel} /></span>
                                        <Tooltip
                                            placement="bottom"
                                            title={intl.formatMessage(homeMessages.picture)}
                                        >
                                            <InfoCircleOutlined />
                                        </Tooltip>
                                    </Text>
                                </div>
                                <ImageUpload onSubmit={onImageUploaded} />
                            </Col>
                        </Row>
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
                                    rows={7}
                                    maxLength={5000}
                                    allowClear
                                    showCount
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

export default NewsForm