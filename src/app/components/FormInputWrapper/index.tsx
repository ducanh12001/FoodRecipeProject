import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const FormInputWrapper = (props: any) => {
  const {
    label = '',
    rules = [],
    placeholder,
    icon,
    children = null,
    required = false,
    passwordInput = false,
    textarea = false,
    rows = 0,
    name,
    id,
    classname = '',
    type,
    value,
    disabled = false,
    allowClear = false,
    changeHandler = () => {},
    min = 0,
    max = 0,
    error,
    maxLength,
    hasFeedback = true,
    tooltop = false,
  } = props;

  return (
    <>
      {children}
      <Form.Item
        label={label ? label : ''}
        name={name}
        rules={rules}
        required={required}
        validateStatus={error ? 'error' : undefined}
        help={error}
        hasFeedback={hasFeedback}
      >
        {passwordInput ? (
          <Input.Password
            className={classname}
            type={type}
            id={id}
            min={min}
            value={value || ''}
            max={max}
            name={name}
            prefix={icon}
            placeholder={placeholder? placeholder : ''}
            onChange={changeHandler}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
          />
        ) : textarea ? (
          <TextArea
            rows={rows}
            className={classname}
            id={id}
            value={value || ''}
            name={name}
            prefix={icon}
            placeholder={placeholder? placeholder : ''}
            onChange={changeHandler}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
          />
        ) : (
          <Input
            className={classname}
            type={type}
            id={id}
            min={min}
            value={value || ''}
            max={max}
            name={name}
            prefix={icon}
            placeholder={placeholder? placeholder : ''}
            onChange={changeHandler}
            disabled={disabled}
            allowClear={allowClear}
          />
        )}
      </Form.Item>
    </>
  );
};

FormInputWrapper.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  rules: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  passwordInput: PropTypes.bool,
  textareaInput: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  classname: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.object,
  maxLength: PropTypes.number,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
};

export default FormInputWrapper;
