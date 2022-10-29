import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber } from 'antd';
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
    number = false,
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
    showCount = false,
    readOnly = false,
    step = 1,
    decimalSeparator,
    addonAfter,
    defaultValue,
    dependencies,
    autoComplete
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
        dependencies={dependencies}
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
            readOnly={readOnly}
            autoComplete={autoComplete}
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
            showCount={showCount}
            readOnly={readOnly}
          />
        ): number ? (
          <InputNumber
            className={classname}
            id={id}
            value={value || ''}
            name={name}
            prefix={icon}
            placeholder={placeholder? placeholder : ''}
            onChange={changeHandler}
            disabled={disabled}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            decimalSeparator={decimalSeparator}
            readOnly={readOnly}
            addonAfter={addonAfter}
            defaultValue={defaultValue}
            autoComplete={autoComplete}
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
            maxLength={maxLength}
            readOnly={readOnly}
            autoComplete={autoComplete}
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
  number: PropTypes.bool,
  showCount: PropTypes.bool,
  readonly: PropTypes.bool,
  step: PropTypes.number,
  decimalSeparator: PropTypes.string,
  addonAfter: PropTypes.string,
  defaultValue: PropTypes.any,
  autoComplete:PropTypes.string,
  dependencies:PropTypes.array
};

export default FormInputWrapper;
