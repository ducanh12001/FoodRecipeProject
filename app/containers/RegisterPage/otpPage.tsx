import { Col, Form, Row, Typography } from 'antd'
import FormInputWrapper from 'components/FormInputWrapper'
import FormWrapper from 'components/FormWrapper'
import { hideHeaderAction } from 'containers/App/actions'
import { makeLoggedInUserSelector, makeRedirectRouteSelector } from 'containers/App/selectors'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { clearFormAction, sendCodeRegisterAction, setFormValuesAction } from './actions'
import messages from './messages'
import { makeClearFormValueSelector, makeErrorSelector, makeFormValuesSelector, makeInitialValuesSelector, makeIsLoadingSelector } from './selectors'
import commonMessage from 'common/messages';
import FormButtonWrapper from 'components/FormButtonWrapper'
import { Link } from 'react-router-dom'
import AlertMessage from 'containers/AlertMessage'

const stateSelector = createStructuredSelector({
    user: makeLoggedInUserSelector(),
    initialValues: makeInitialValuesSelector(),
    errors: makeErrorSelector(),
    clearFormValue: makeIsLoadingSelector(),
    isLoading: makeClearFormValueSelector(),
    redirectRoute: makeRedirectRouteSelector(),
    formValues: makeFormValuesSelector(),
});

const { Title } = Typography;

function OtpPage() {
    const dispatch = useDispatch();
    const { user, errors, isLoading, initialValues, clearFormValue, redirectRoute, formValues } =
        useSelector(stateSelector);
    const [form] = Form.useForm();
    const hideHeader = () => dispatch(hideHeaderAction(true));

    useEffect(() => {
        hideHeader();
    }, [user]);

    const onFinish = async () => {
        await form.validateFields();
        dispatch(setFormValuesAction({ ...form.getFieldsValue(), ...formValues }))
        dispatch(sendCodeRegisterAction())
    };

    useEffect(() => {
        if (clearFormValue) {
            form.resetFields();
            dispatch(clearFormAction(false));
        }
    }, [clearFormValue]);

    useEffect(() => {
        if (errors?.length) {
            form.setFields(errors);
        }
    }, [errors]);

    return (
        <div className="register-page">
            <FormattedMessage {...messages.verifiPageTitle}>
                {(title) => (
                    <Helmet>
                        <title>{title}</title>
                    </Helmet>
                )}
            </FormattedMessage>
            <Row className="register-center">
                <Col span={24} className="m-auto">
                    <FormWrapper
                        values={initialValues}
                        className="register-page-form"
                        forminstance={form}
                        onFinish={onFinish}
                        name="register-form"
                    >
                        <AlertMessage />
                        <Title style={{ color: '#237280' }} level={4}>Mã OTP đã được gửi tới email của bạn. Hãy kiểm tra và nhập vào dưới đây.</Title>
                        <FormInputWrapper
                            label={commonMessage.otp}
                            name="otp"
                            id="otp"
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: (
                                        <FormattedMessage
                                            {...commonMessage.otpRequired}
                                        />
                                    ),
                                },
                            ]}
                            placeholder={commonMessage.otpPlaceholder}
                        />

                        <div className="register-btn-wrapper">
                            <FormButtonWrapper
                                variant="primary"
                                disabled={isLoading}
                                form={form}
                                className="mb-0"
                                label={messages.verify}
                            />
                        </div>
                        <div className="link-login">
                            <FormattedMessage {...messages.alreadyAccount} />{' '}
                            <Link to="/login">
                                <FormattedMessage {...messages.loginHere} />
                            </Link>
                        </div>
                    </FormWrapper>
                </Col>
            </Row>
        </div>
    )
}

export default OtpPage