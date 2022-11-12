/**
 *
 * ResetPassword
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/ResetPassword/saga';
import reducer from 'containers/ResetPassword/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import {
  resetPasswordAction,
  setResetCodeAction,
  setFormValuesAction,
  clearFormAction,
} from 'containers/ResetPassword/actions';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormValueSelector,
  makeConfirmPasswordSelector,
  makeErrorsSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
  makePasswordSelector,
} from 'containers/ResetPassword/selectors';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/ResetPassword/messages';
import commonMessages from 'common/messages';
import FormButtonWrapper from 'components/FormButtonWrapper';
import FormInputWrapper from 'components/FormInputWrapper';
import { Progress, Row, Form, Typography, Col } from 'antd';
import { checkIfStrongPassword } from 'common/validator';
import usePasswordStrengthCheckHook from 'common/hooks/passwordStrengthHook';
import AlertMessage from 'containers/AlertMessage';
import FormWrapper from 'components/FormWrapper';

const key = 'resetPassword';

const { Title } = Typography;

const stateSelector = createStructuredSelector({
  password: makePasswordSelector(),
  isLoading: makeIsLoadingSelector(),
  confirmPassword: makeConfirmPasswordSelector(),
  errors: makeErrorsSelector(),
  initialValues: makeInitialValuesSelector(),
  clearFormValue: makeClearFormValueSelector(),
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 24 },
    sm: { span: 24 },
  },
};

export default function ResetPassword() {
  const dispatch = useDispatch();

  useInjectSaga({ key, saga });

  useInjectReducer({ key, reducer });

  const [form] = Form.useForm();

  const intl = useIntl();

  const { errors, isLoading, initialValues, clearFormValue } =
    useSelector(stateSelector);

  const { code } = useParams();

  const [password, setPassword] = useState('');

  const [lowerCheck, upperCheck, numChecker, charCheck] =
    usePasswordStrengthCheckHook(password);

  useEffect(() => {
    dispatch(setResetCodeAction(code));
  }, [code]);
  const onFinish = async () => {
    await form.validateFields();
    dispatch(setFormValuesAction(form.getFieldsValue()));
    dispatch(resetPasswordAction());
  };

  const checkConfirm = (rule: any, value: string) => {
    const newPassword = form.getFieldValue('password');
    if (newPassword !== value) {
      return Promise.reject(
        new Error(intl.formatMessage(commonMessages.confirmPasswordMatchError)),
      );
    }
    return Promise.resolve();
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
    <div className="login-page mh-100">
      <FormattedMessage {...messages.helmetResetPasswordTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <Row className="login-center">
        <Col xl={8} className="m-auto">
          <FormWrapper
            {...formItemLayout}
            values={initialValues}
            forminstance={form}
            name="register"
            onFinish={onFinish}
            className="login-page-form form-ant-items"
          >
            <Title style={{color: '#237280'}} level={2}>
              <FormattedMessage {...messages.helmetResetPasswordTitle}/>
            </Title>

            <AlertMessage />

            <FormInputWrapper
              passwordInput
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: <FormattedMessage {...commonMessages.passwordRequired} />,
                }
              ]}
              name="oldPassword"
              id="oldPassword"
              type="password"
              placeholder={messages.oldPasswordPlaceHoder}
              label={commonMessages.oldPasswordLabel}
            />

            <FormInputWrapper
              passwordInput
              label={commonMessages.newPasswordLabel}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: (
                    <FormattedMessage {...commonMessages.passwordRequired} />
                  ),
                },
                {
                  validator: checkIfStrongPassword,
                },
              ]}
              name="password"
              id="password"
              type="password"
              placeholder={messages.newPasswordPlaceHoder}
              changeHandler={(e) => setPassword(e.target.value)}
            >
              <Progress
                percent={
                  ((lowerCheck + charCheck + upperCheck + numChecker) / 4) * 100
                }
                steps={4}
              />
            </FormInputWrapper>

            <FormInputWrapper
              passwordInput
              label={commonMessages.confirmPasswordLabel}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: (
                    <FormattedMessage
                      {...commonMessages.confirmPasswordRequired}
                    />
                  ),
                },
                {
                  validator: checkConfirm,
                },
              ]}
              name="confirmPassword"
              id="confirmPassword"
              placeholder={messages.reNewPasswordPlaceHoder}
            />

            <FormButtonWrapper
              variant="primary"
              disabled={isLoading}
              form={form}
              label={messages.resetPasswordBtn}
            />
          </FormWrapper>
        </Col>
      </Row>
    </div>
  );
}
