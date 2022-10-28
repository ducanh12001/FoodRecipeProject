import React from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import moment from 'moment-timezone';

const FormDatePickerWrapper = (props: any) => {
  const {
    label = null,
    rules = [],
    placeholder,
    children = null,
    required = false,
    name,
    id,
    classname = '',
    value = moment(),
    disabled = false,
    allowClear = false,
    changeHandler = () => {},
    error,
    mode = 'date',
    placement = 'bottomLeft',
    status,
    format
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
        hasFeedback
      >
        <DatePicker
          className={classname}
          id={id}
          placeholder={placeholder? placeholder : ''}
          disabled={disabled}
          allowClear={allowClear}
          onChange={changeHandler}
          mode={mode}
          placement={placement}
          status={status}
          value={value}
          format={format}
        />
      </Form.Item>
    </>
  );
};

FormDatePickerWrapper.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  rules: PropTypes.array,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.object,
  name: PropTypes.string,
  id: PropTypes.string,
  classname: PropTypes.string,
  changeHandler: PropTypes.func,
  searchHandler: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.object,
  required: PropTypes.bool,
  mode: PropTypes.string,
  placement: PropTypes.string,
  status: PropTypes.string,
  format: PropTypes.string
};

export default FormDatePickerWrapper;
