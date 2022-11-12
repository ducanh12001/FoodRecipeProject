import React from 'react';
import PropTypes from 'prop-types';
import { MessageDescriptor, useIntl } from 'react-intl';
import { Form, Select } from 'antd';
import { Rule } from 'antd/lib/form';

interface SelectInputWrapperProps {
  name?: string | number | (string | number)[];
  value?: string | number;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  children?: React.ReactNode;
  rules?: Rule[];
  label?: MessageDescriptor;
  id?: string;
  classname?: string;
  changeHandler?: (...arg: any[]) => any;
}
const SelectInputWrapper = (props: SelectInputWrapperProps) => {
  const intl = useIntl();
  const {
    children,
    rules = [],
    label,
    name,
    id,
    classname = '',
    value,
    disabled = false,
    required = true,
    changeHandler = () => {},
    error,
  } = props;

  return (
    <Form.Item
      label={intl.formatMessage(label)}
      rules={rules}
      name={name}
      required={required}
      validateStatus={error ? 'error' : undefined}
      help={error}
    >
      <Select
        id={id}
        className={classname}
        value={value}
        disabled={disabled}
        onChange={changeHandler}
      >
        {children}
      </Select>
    </Form.Item>
  );
};

// SelectInputWrapper.propTypes = {
//   name: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   disabled: PropTypes.bool,
//   required: PropTypes.bool,
//   error: PropTypes.string,
//   children: PropTypes.node,
//   rules: PropTypes.array,
//   label: PropTypes.object.isRequired,
//   id: PropTypes.string,
//   classname: PropTypes.string,
//   changeHandler: PropTypes.func,
// };

export default SelectInputWrapper;
