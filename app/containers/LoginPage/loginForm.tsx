/**
 *
 * LoginForm
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  enterLoginAction,
  setFormValuesAction,
} from 'containers/LoginPage/actions';
import {
  makeErrorSelector,
  makeFormValuesSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
} from 'containers/LoginPage/selectors';
import { Form, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import messages from 'containers/LoginPage/messages';
import commonMessage from 'common/messages';
import { FormattedMessage } from 'react-intl';
import FormInputWrapper from 'components/FormInputWrapper';
import FormButtonWrapper from 'components/FormButtonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import AlertMessage from 'containers/AlertMessage';
import FormWrapper from 'components/FormWrapper';
import axios from 'axios';

const { Title } = Typography;
const stateSelector = createStructuredSelector({
  initialValues: makeInitialValuesSelector(),
  isLoading: makeIsLoadingSelector(),
  errors: makeErrorSelector(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const { initialValues, isLoading, errors } = useSelector(stateSelector);
  const [form] = Form.useForm();

  let navigate = useNavigate();

  const onFinish = async () => {
    await form.validateFields();
    dispatch(setFormValuesAction(form.getFieldsValue()));
    dispatch(enterLoginAction());
  };

  useEffect(() => {
    if (errors?.length) {
      form.setFields(errors);
    }
  }, [errors]);

  return (
    <FormWrapper
      className="login-page-form"
      values={initialValues}
      forminstance={form}
      onFinish={onFinish}
      name="login-form"
    >
      <Title level={3}>
        <FormattedMessage {...messages.helmetLoginTitle} />
      </Title>

      <AlertMessage />

      <FormInputWrapper
        name="email"
        id="email"
        type="text"
        rules={[
          {
            required: true,
            whitespace: true,
            message: <FormattedMessage {...commonMessage.emailRequired} />,
          },
          {
            type: 'email',
            message: <FormattedMessage {...commonMessage.validEmailRequired} />,
          },
        ]}
        icon={<UserOutlined className="site-form-item-icon" />}
        placeholder={commonMessage.emailPlaceHolder}
      />

      <FormInputWrapper
        passwordInput
        rules={[
          {
            required: true,
            whitespace: true,
            message: <FormattedMessage {...commonMessage.passwordRequired} />,
          },
        ]}
        name="password"
        id="password"
        type="password"
        icon={<LockOutlined className="site-form-item-icon" />}
        placeholder={commonMessage.passwordPlaceHolder}
      />

      <Form.Item>
        <div className="d-flex">
          <div className="ml-auto">
            <Link className="login-form-forgot" to="/forgot-password">
              <FormattedMessage {...messages.lostPassword} />
            </Link>
          </div>
        </div>
      </Form.Item>

      <FormButtonWrapper
        variant="primary"
        disabled={isLoading}
        form={form}
        label={messages.submit}
      />
      <Link className="link" to="/register">
        <FormattedMessage {...messages.register} />
      </Link>
      <Link className="link" to="/">
        Back to home
      </Link>
    </FormWrapper>
  );
};
export default LoginForm;
