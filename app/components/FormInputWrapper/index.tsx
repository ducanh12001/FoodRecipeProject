import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Form, Input, InputNumber } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const FormInputWrapper = (props: any) => {
  const intl = useIntl();
  const {
    label = null,
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
    pressHandler = () => {},
    min = 0,
    max = 0,
    error,
    maxLength,
    hasFeedback = true,
    tooltip = false,
    showCount = false,
    readOnly = false,
    step = 1,
    decimalSeparator,
    addonAfter,
    defaultValue,
    dependencies,
    autoComplete,
    style
  } = props;

  return (
    <>
      {children}
      <Form.Item
        label={label ? intl.formatMessage(label) : ''}
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
            placeholder={placeholder && intl.formatMessage(placeholder)}
            onChange={changeHandler}
            onKeyPress={pressHandler}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
            readOnly={readOnly}
            autoComplete={autoComplete}
            style={style}
          />
        ) : textarea ? (
          <TextArea
            rows={rows}
            className={classname}
            id={id}
            value={value || ''}
            name={name}
            prefix={icon}
            placeholder={placeholder && intl.formatMessage(placeholder)}
            onChange={changeHandler}
            onKeyPress={pressHandler}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
            showCount={showCount}
            readOnly={readOnly}
            style={style}
          />
        ): number ? (
          <InputNumber
            className={classname}
            id={id}
            value={value || ''}
            name={name}
            prefix={icon}
            placeholder={placeholder && intl.formatMessage(placeholder)}
            onChange={changeHandler}
            onKeyPress={pressHandler}
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
            style={style}
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
            placeholder={placeholder && intl.formatMessage(placeholder)}
            onChange={changeHandler}
            onKeyPress={pressHandler}
            disabled={disabled}
            allowClear={allowClear}
            maxLength={maxLength}
            readOnly={readOnly}
            autoComplete={autoComplete}
            style={style}
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
  label: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  classname: PropTypes.string,
  changeHandler: PropTypes.func,
  pressHandler: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.object,
  required: PropTypes.bool,
  icon: PropTypes.object,
  maxLength: PropTypes.number,
  textarea: PropTypes.bool,
  number: PropTypes.bool,
  rows: PropTypes.number,
  showCount: PropTypes.bool,
  readonly: PropTypes.bool,
  step: PropTypes.number,
  decimalSeparator: PropTypes.string,
  addonAfter: PropTypes.string,
  defaultValue: PropTypes.any,
  autoComplete:PropTypes.string,
  dependencies:PropTypes.array,
  style: PropTypes.any
};

export default FormInputWrapper;
