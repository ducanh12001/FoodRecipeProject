import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';

const FormSelectWrapper = (props: any) => {
  const {
    label = null,
    rules = [],
    placeholder,
    children = null,
    required = false,
    name,
    id,
    classname = '',
    value,
    disabled = false,
    allowClear = false,
    changeHandler = () => {},
    searchHandler = () => {},
    error,
    options = [],
    mode,
    defaultValue
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
        <Select
          className={classname}
          id={id}
          value={value || ''}
          options={options}
          mode={mode}
          placeholder={placeholder? placeholder : ''}
          disabled={disabled}
          allowClear={allowClear}
          showSearch
          optionFilterProp="label"
          defaultValue={defaultValue}
          onChange={changeHandler}
          onSearch={searchHandler}
          filterOption={(input, option) =>
            (option!.label as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        ></Select>
      </Form.Item>
    </>
  );
};

FormSelectWrapper.propTypes = {
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
  value: PropTypes.string,
  placeholder: PropTypes.object,
  required: PropTypes.bool,
  options: PropTypes.array,
  mode: PropTypes.string,
  defaultValue: PropTypes.string || PropTypes.number
};

export default FormSelectWrapper;
