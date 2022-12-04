import { Button, Col, Form, Image, Input, message, Row, Tooltip, Typography, Upload } from 'antd';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../../components/FormWrapper';
import { InfoCircleOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import ImageUpload from './imageUpload';
import { useDispatch } from 'react-redux';
import { setFormValues, submitFormAction } from './actions';
import { makeErrorSelector, makeIsLoadingSelector } from './selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import commonMessages from 'common/messages'

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


function CreateRecipeHome() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const intl = useIntl();
    const [form] = Form.useForm();
    const { loading, errors, } = useSelector(stateSelector);

    const ingredientInitValues = Array.from({ length: 2 }, () => ({ name: "" }));
    const dirInitValues = Array.from({ length: 2 }, () => ({ content: "" }));

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
        let steps = formVal.steps.map((d:any, index:number) => {
            return {
                order: index + 1,
                content: d.content,
            }
        })
        dispatch(
            setFormValues({
                ...formVal,
                steps,
                pictures: productMedias,
                time: {
                    preptime: formVal.preptime, 
                    cooktime: formVal.cooktime,
                    yields: formVal.yields
                },
                author_id: localStorage.getItem('USER_ID')
            })
        )
        dispatch(submitFormAction());
    }

    const onCancel = () => {
        navigate('/home');
    };

    const onImageUploaded = (images: Array<any>) => {
        setImageLinks(images);
    };


    useEffect(() => {
        form.setFields([{ name: "ingredients", value: ingredientInitValues },
        { name: "steps", value: dirInitValues }]);
    }, []);

    useEffect(() => {
        if (errors?.length) {
          form.setFields(errors);
        }
      }, [errors]);

    return (
        <div>
            <Helmet>
                <title>Create Recipe</title>
            </Helmet>
            <FormWrapper
                {...formItemLayout}
                forminstance={form}
                onFinish={onFinish}
                name="recipe-form"
                className="recipe-form"
            >
                <Row>
                    <Col span={24}>
                        <Title level={3}><FormattedMessage {...messages.createRecipe} /></Title>
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
                                <ImageUpload onSubmit={onImageUploaded} />
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
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} className="add-form-label"><FormattedMessage {...messages.ingredientLabel} /></Col>
                        </Row>

                        <Form.List name="ingredients">
                            {(fields, { add, remove }, { errors }) => (
                                <>
                                    {fields.map((field:any, index) => (
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
                                    {fields.map((field:any, index) => (
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
                                            <FormattedMessage {...messages.addDirectionBtn} />
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
                                    min={1}
                                    max={1000}
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: intl.formatMessage(messages.require),
                                        },
                                    ]}
                                />
                                <FormInputWrapper
                                    label={messages.prepTimeLabel}
                                    name="preptime"
                                    id="prepTime"
                                    type="number"
                                    allowClear
                                    min={1}
                                    max={1000}
                                    icon={<FormattedMessage {...commonMessages.minutes} />}
                                    required
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: intl.formatMessage(messages.require),
                                        },
                                    ]}
                                />
                                <FormInputWrapper
                                    label={messages.cookTimeLabel}
                                    name="cooktime"
                                    id="cookTime"
                                    type="number"
                                    min={1}
                                    max={1000}
                                    icon={<FormattedMessage {...commonMessages.minutes} />}
                                    allowClear
                                    required
                                    rules={[
                                        {
                                            required: true,
                                            whitespace: true,
                                            message: intl.formatMessage(messages.require),
                                        },
                                    ]}
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
        </div>
    )
}

export default CreateRecipeHome