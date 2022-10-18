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
  makeFormValuesSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
} from './selectors';
import { Checkbox, Form, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import { Link, useNavigate } from 'react-router-dom';
import FormWrapper from '../../components/FormWrapper';
import axios from 'axios';
import { values } from 'lodash';

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
    axios
      .post(
        `http://13.215.176.20:3000/api/auth/login`,
        form.getFieldsValue(),
      )
      .then((res) => {
        localStorage.setItem('ACCESS_TOKEN', res.data.data.jwtToken);
        localStorage.setItem('ACCOUNT_LOGIN', res.data.data.accountInfo.email);
        localStorage.setItem('ID_USER', res.data.data.accountInfo.id);
        localStorage.setItem('NAME_USER', res.data.data.accountInfo.fullName);
        if (res.data.message === 'Success') {
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
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
      <FormInputWrapper
        name="username"
        id="username"
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
        placeholder="Username"
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
    </FormWrapper>
  );
};
export default LoginForm;
