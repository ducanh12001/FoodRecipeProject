/**
 *
 * ChangePassword
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/ChangePassword/saga';
import reducer from 'containers/ChangePassword/reducer';
import { useInjectReducer } from 'utils/injectReducer';
import {
  changePasswordAction,
  setFormValuesAction,
  clearFormAction,
} from 'containers/ChangePassword/actions';
import { createStructuredSelector } from 'reselect';
import {
  makeClearFormValueSelector,
  makeConfirmPasswordSelector,
  makeErrorsSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
  makeNewPasswordSelector,
} from 'containers/ChangePassword/selectors';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'react-intl';
import messages from 'containers/ChangePassword/messages';
import commonMessages from 'common/messages';
import FormButtonWrapper from 'components/FormButtonWrapper';
import FormInputWrapper from 'components/FormInputWrapper';
import { Progress, Row, Form, Typography, Col } from 'antd';
import { checkIfStrongPassword, checkPasswordLength } from 'common/validator';
import usePasswordStrengthCheckHook from 'common/hooks/passwordStrengthHook';
import AlertMessage from 'containers/AlertMessage';
import FormWrapper from 'components/FormWrapper';

const key = 'ChangePassword';

const { Title } = Typography;

const stateSelector = createStructuredSelector({
  newPass: makeNewPasswordSelector(),
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

export default function ChangePassword() {
  const dispatch = useDispatch();

  useInjectSaga({ key, saga });

  useInjectReducer({ key, reducer });

  const [form] = Form.useForm();

  const intl = useIntl();

  const { errors, isLoading, initialValues, clearFormValue } =
    useSelector(stateSelector);

  const [newPass, setNewPass] = useState('');

  const [lowerCheck, upperCheck, numChecker, charCheck] =
    usePasswordStrengthCheckHook(newPass);

  const onFinish = async () => {
    await form.validateFields();
    dispatch(setFormValuesAction({
      ...form.getFieldsValue(),
      user_id: localStorage.getItem('USER_ID')
    }));
    dispatch(changePasswordAction());
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
    <>
      <FormattedMessage {...messages.helmetChangePasswordTitle}>
        {(title) => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <div className="manage-table">
        <Title level={2}>{intl.formatMessage(messages.pageHeader)}</Title>
        <Row>
          <Col xl={8} lg={12} md={12} sm={24}>
            <FormWrapper
              {...formItemLayout}
              values={initialValues}
              forminstance={form}
              name="changePassword"
              onFinish={onFinish}
              className="form-ant-items"
            >             
              <FormInputWrapper
                passwordInput
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: (
                      <FormattedMessage {...commonMessages.passwordRequired} />
                    ),
                  },
                ]}
                name="password"
                id="password"
                type="password"
                placeholder={messages.oldPasswordPlaceHoder}
                label={messages.oldPasswordLabel}
                maxLength={20}
              />

              <FormInputWrapper
                passwordInput
                label={messages.newPasswordLabel}
                rules={[
                  {
                    required: true,
                    whitespace: true,
                    message: (
                      <FormattedMessage {...commonMessages.passwordRequired} />
                    ),
                  },
                  {
                    validator: checkPasswordLength,
                  },
                ]}
                name="newPassword"
                id="newPassword"
                type="password"
                placeholder={messages.newPasswordPlaceHoder}
                changeHandler={(e) => setNewPass(e.target.value)}
                maxLength={20}
              >
                <Progress
                  percent={
                    ((lowerCheck + charCheck + upperCheck + numChecker) / 4) *
                    100
                  }
                  steps={4}
                />
              </FormInputWrapper>

              <FormInputWrapper
                passwordInput
                label={messages.confirmNewPasswordLabel}
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
                  ({ getFieldValue }:any) => ({
                    validator(_:any, value: any) {
                      if (!value || getFieldValue('newPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error(intl.formatMessage(commonMessages.confirmPasswordMatchError)));
                    },
                  }),
                ]}
                name="confirmNewPassword"
                id="confirmNewPassword"
                placeholder={messages.confirmNewPasswordPlaceholder}
                maxLength={20}
                dependencies={['newPassword']}
              />

              <FormButtonWrapper
                variant="primary"
                disabled={isLoading}
                form={form}
                label={messages.changePasswordBtn}
              />
            </FormWrapper>
          </Col>
        </Row>
      </div>
    </>
  );
}
