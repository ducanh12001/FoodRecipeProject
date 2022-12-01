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
import { makeErrorSelector, makeIsLoadingSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import messages from 'containers/RecipeHome/messages';
import { FormattedMessage } from 'react-intl';
import { PUT } from 'utils/constants';

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
});

function EditToolForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const intl = useIntl();
  const {id} = useParams();
  const [form] = Form.useForm();

  const {
    errors,
  } = useSelector(stateSelector);

  const [imageLinks, setImageLinks] = useState(new Array<any>());
  const [existingImages, setExistingImages] = useState(new Array<any>());
  const ingredientInitValues = Array.from({ length: 2 }, () => ({ name: "" }));
  const dirInitValues = Array.from({ length: 2 }, () => ({ content: "" }));

  const onFinish = async () => {
    await form.validateFields();

    let formVal = form.getFieldsValue();
    dispatch(
      setFormValues({
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

  const onNameChanged = () => {

  }

  const onDescriptionChanged = () => {

  }

  const onYieldsChanged = () => {

  }

  const onPrepTimeChanged = () => {

  }

  const onCookTimeChanged = () => {

  }

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
    form.setFields([{ name: "ingredients", value: ingredientInitValues },
    { name: "steps", value: dirInitValues }]);
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
                    <span className="add-form-label" style={{ marginRight: 6 }}><FormattedMessage {...messages.photoLabel} /></span>
                    <Tooltip
                      placement="bottom"
                      title={intl.formatMessage(messages.picture)}
                    >
                      <InfoCircleOutlined />
                    </Tooltip>
                  </Text>
                </div>
                <ImageUpload onSubmit={onImageUploaded} existingFiles={existingImages} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormInputWrapper
                  label={messages.recipeTitle}
                  name="name"
                  id="name"
                  type="text"
                  placeholder={messages.recipeNamePlaceholder}
                  maxLength={200}
                  allowClear
                  required
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(messages.require),
                    },
                  ]}
                  changeHandler={onNameChanged}
                />
                <FormInputWrapper
                  label={messages.descriptionLabel}
                  name="description"
                  id="description"
                  required
                  textarea
                  rows={5}
                  maxLength={2000}
                  allowClear
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(messages.require),
                    },
                  ]}
                  changeHandler={onDescriptionChanged}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24} className="add-form-label"><FormattedMessage {...messages.ingredientLabel} /></Col>
            </Row>

            <Form.List name="ingredients">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field: any, index) => (
                    <Form.Item
                      label={''}
                      required={false}
                      key={field.key}
                    >
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            {...field}
                            name={[field.name, "name"]}
                            fieldKey={[field.fieldKey, "name"]}
                            validateTrigger={['onChange', 'onBlur']}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message: intl.formatMessage(messages.inputIngredient),
                              },
                            ]}
                          >
                            <Input placeholder={intl.formatMessage(messages.ingredientPlaceholder)} />
                          </Form.Item>
                        </Col>
                        <Col span={1}>
                          {fields.length > 1 ? (
                            <DeleteOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />
                          ) : null}
                        </Col>
                      </Row>
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="link"
                      className="add-row-btn"
                      icon={<PlusOutlined />}
                      onClick={() => add()}
                    >
                      <FormattedMessage {...messages.addIngredientBtn} />
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Row>
              <Col span={24} className="add-form-label"><FormattedMessage {...messages.directionLabel} /></Col>
            </Row>
            <Form.List name="steps"
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field: any, index) => (
                    <Form.Item
                      label={''}
                      required={false}
                      key={field.key}
                    >
                      <Title level={5}>{intl.formatMessage(messages.step) + ` ${index + 1}`}</Title>
                      <Row gutter={8}>
                        <Col span={12}>
                          <Form.Item
                            {...field}
                            name={[field.name, "content"]}
                            fieldKey={[field.fieldKey, "content"]}
                            validateTrigger={['onChange', 'onBlur']}
                            rules={[
                              {
                                required: true,
                                whitespace: true,
                                message: intl.formatMessage(messages.inputDirection),
                              },
                            ]}
                          >
                            <Input placeholder={intl.formatMessage(messages.directionPlaceholder)} />
                          </Form.Item>
                        </Col>
                        <Col span={1}>
                          {fields.length > 1 ? (
                            <DeleteOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            />
                          ) : null}
                        </Col>
                      </Row>
                    </Form.Item>

                  ))}
                  <Form.Item>
                    <Button
                      type="link"
                      className="add-row-btn"
                      icon={<PlusOutlined />}
                      onClick={() => add()}
                    >
                      Add directions
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Row>
              <Col span={24}>
                <FormInputWrapper
                  label={messages.yieldLabel}
                  name="yields"
                  id="servings"
                  type="number"
                  allowClear
                  required
                  min={0}
                  max={1000}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(messages.require),
                    },
                  ]}
                  changeHandler={onYieldsChanged}
                />
                <FormInputWrapper
                  label={messages.prepTimeLabel}
                  name="preptime"
                  id="prepTime"
                  type="text"
                  allowClear
                  required
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(messages.require),
                    },
                  ]}
                  changeHandler={onPrepTimeChanged}
                />
                <FormInputWrapper
                  label={messages.cookTimeLabel}
                  name="cooktime"
                  id="cookTime"
                  type="text"
                  allowClear
                  required
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: intl.formatMessage(messages.require),
                    },
                  ]}
                  changeHandler={onCookTimeChanged}
                />
                <FormInputWrapper
                  label={messages.noteLabel}
                  name="note"
                  id="note"
                  textarea
                  rows={3}
                  allowClear
                />
              </Col>
              <Col span={24}>
              </Col>
              <Col span={24}>

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
                  <FormattedMessage {...messages.cancelBtn} />
                </Button>
              </Col>
              <Col>
                <FormButtonWrapper
                  variant="primary"
                  form={form}
                  label={messages.submitBtn}
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