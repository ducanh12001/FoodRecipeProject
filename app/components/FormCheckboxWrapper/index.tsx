import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, IntlShape, MessageDescriptor } from 'react-intl';

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
  label?: MessageDescriptor;
  name?: string;
  id?: string;
  classname?: string;
  changeHandler?: (...arg: any[]) => any;
  value?: boolean;
  placeholder?: any;
  intl: IntlShape;
}
const FormCheckBoxWrapper = (props: FormProps) => {
  const {
    layout = {},
    label,
    rules = [],
    intl,
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
        label={label ? intl.formatMessage(label) : ''}
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

// FormCheckBoxWrapper.propTypes = {
//   children: PropTypes.node,
//   rules: PropTypes.array,
//   disabled: PropTypes.bool,
//   layout: PropTypes.object,
//   label: PropTypes.object,
//   name: PropTypes.string,
//   id: PropTypes.string,
//   classname: PropTypes.string,
//   changeHandler: PropTypes.func,
//   value: PropTypes.bool,
//   placeholder: PropTypes.object,
//   intl: PropTypes.object,
// };

export default injectIntl(FormCheckBoxWrapper);
