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
} from './actions';
import {
  makeErrorSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
} from './selectors';
import { Alert, Form, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import FormWrapper from '../../components/FormWrapper';
import AlertMessage from '../AlertMessage';

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
/*
    axios
      .post(
        `http://dnqfood.tk/api/auth/login`,
        form.getFieldsValue(),
      )
      .then((res:any) => {
        if (res.data.status === 200) {
          localStorage.setItem('ACCESS_TOKEN', res.data.data.accessToken);
          dispatch(isLoggedSuccessAction());
        } else {
          setLogError(res.data.message);
        }
      })
      .catch((err) => {
      });
      */
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
      <Title level={3}>FoodRecipeProject</Title>
      <AlertMessage />
      <FormInputWrapper
        name="email"
        id="email"
        type="text"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'require',
          },
          {
            type: 'email',
            message: 'wrong type email',
          },
        ]}
        icon={<UserOutlined className="site-form-item-icon" />}
        placeholder="Email"
      />

      <FormInputWrapper
        passwordInput
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'require',
          },
        ]}
        name="password"
        id="password"
        type="password"
        icon={<LockOutlined className="site-form-item-icon" />}
        placeholder="Password"
      />

      <Form.Item>
        <div className="d-flex">
          <div className="ml-auto">
            <Link className="login-form-forgot" to="/forgot-password">
              Forgot password?
            </Link>
          </div>
        </div>
      </Form.Item>
      <FormButtonWrapper
        variant="primary"
        disabled={isLoading}
        form={form}
        label="Login"
      />
      <div className="register-link"><Link to='/register'>Register</Link></div>
    </FormWrapper>
  );
};
export default LoginForm;
