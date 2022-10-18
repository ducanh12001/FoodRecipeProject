/**
 *
 * RegisterForm
 *
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  enterRegisterAction,
  setFormValuesAction,
  clearFormAction,
} from './actions';
import {
  makeErrorSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
  makeClearFormValueSelector,
} from './selectors';
import { Col, Form, Progress, Row, Typography } from 'antd';
import FormCheckboxWrapper from '../../components/FormCheckboxWrapper';
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import usePasswordStrengthCheckHook from '../../common/hooks/passwordStrengthHook';
import AlertMessage from '../AlertMessage';
import { rules } from '../../common/rules';
import FormWrapper from '../../components/FormWrapper';

const { Title } = Typography;

const stateSelector = createStructuredSelector({
  initialValues: makeInitialValuesSelector(),
  errors: makeErrorSelector(),
  clearFormValue: makeIsLoadingSelector(),
  isLoading: makeClearFormValueSelector(),
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
const selectLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function RegisterForm(props: any) {
  const { intl } = props;
  const dispatch = useDispatch();
  const { errors, isLoading, initialValues, clearFormValue } =
    useSelector(stateSelector);
  const [form] = Form.useForm();
  const [password, setPassword] = useState('');

  const [lowerCheck, upperCheck, numChecker, charCheck] =
    usePasswordStrengthCheckHook(password);

  const onFinish = async () => {
    await form.validateFields();
    dispatch(setFormValuesAction(form.getFieldsValue()));
    dispatch(enterRegisterAction());
  };

  const checkConfirm = (rule: any, value: string) => {
    const newPassword = form.getFieldValue('password');
    if (newPassword !== value) {
      return Promise.reject(
        new Error('Mật khẩu xác nhận không khớp!'),
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
    <FormWrapper
      {...formItemLayout}
      values={initialValues}
      className="register-page-form"
      forminstance={form}
      onFinish={onFinish}
      name="register-form"
    >
      <Title level={2}>Create an account</Title>

      <AlertMessage />

      <Row gutter={[16, 25]}>
        <Col xl={12} lg={12} md={12} xs={24}>
          <FormInputWrapper
            label='Tên đăng nhập'
            name="username"
            id="username"
            type="text"
            rules={rules.username}
            placeholder='Nhập tên đăng nhập!'
          />
        </Col>
        <Col xl={12} lg={12} md={12} xs={24}>
          <FormInputWrapper
            label='Name'
            name="name"
            id="name"
            type="text"
            rules={rules.name}
            placeholder=''
          />
        </Col>
      </Row>
      <FormInputWrapper
        name="email"
        label='Email'
        id="email"
        type="email"
        rules={rules.email}
        placeholder=''
      />

      <FormInputWrapper
        passwordInput
        label='Mat khau'
        rules={rules.password}
        name="password"
        id="password"
        placeholder=''
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
        label=''
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Vui lòng nhập mật khẩu xác nhận!',
          },
          {
            validator: checkConfirm,
          },
        ]}
        name="confirmPassword"
        id="confirmPassword"
        placeholder=''
      />

      <FormCheckboxWrapper
        layout={selectLayout}
        rules={[
          {
            validator: (_: any, val: any, callback: (...arg: any[]) => any) =>
              val
                ? callback()
                : callback('Should accept terms and condition!'),
          },
        ]}
        name="accept"
        id="accept"
      >
        <Link to="/terms-agreement">
          Terms and conditions
        </Link>
      </FormCheckboxWrapper>
      <div className="register-btn-wrapper">
        <FormButtonWrapper
          variant="primary"
          disabled={isLoading}
          form={form}
          className="mb-0"
          label='Sign up'
        />
      </div>
      <div className="link-login">
        Already have an account?{' '}
        <Link to="/login">Login here</Link>
      </div>
    </FormWrapper>
  );
}

export default RegisterForm;
