import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Form, FormInstance } from 'antd';
import { Rule } from 'antd/lib/form';

interface Layout {
  wrapperCol: {
    xs: {
      span: number;
      offset: number;
    };
    sm: {
      span: number;
      offset: number;
    };
  };
}
interface FormProps {
  children?: React.ReactNode;
  rules?: Rule[];
  disabled?: boolean;
  layout?: object;
  label?: string;
  name?: string;
  id?: string;
  classname?: string;
  changeHandler?: (...arg: any[]) => any;
  value?: boolean;
  placeholder?: any;
}
const FormCheckBoxWrapper = (props: FormProps) => {
  const {
    layout = {},
    label,
    rules = [],
    children = null,
    name,
    id,
    classname = '',
    value,
    disabled = false,
    changeHandler = () => {},
  } = props;

  return (
    <>
      <Form.Item
        name={name}
        valuePropName="checked"
        rules={rules}
        label={label ? label : ''}
        {...layout}
      >
        <Checkbox
          id={id}
          name={name}
          className={classname}
          disabled={disabled}
          checked={value}
          onChange={changeHandler}
        >
          {children}
        </Checkbox>
      </Form.Item>
    </>
  );
};

export default FormCheckBoxWrapper;
