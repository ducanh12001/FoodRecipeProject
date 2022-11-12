import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Form, TreeSelect } from 'antd';

const FormTreeSelectWrapper = (props: any) => {
  const intl = useIntl();
  const {
    label = null,
    rules = [],
    placeholder,
    children = null,
    required = false,
    id,
    name,
    classname = '',
    value,
    disabled = false,
    allowClear = false,
    changeHandler = () => {},
    error,
    allowSearch,
    data = []
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
        hasFeedback
      >
        <TreeSelect
          showSearch={allowSearch}
          className={classname}
          id={id}
          value={value || ''}
          placeholder={placeholder && intl.formatMessage(placeholder)}
          style={{ width: '100%' }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          onChange={changeHandler}
          disabled={disabled}
          allowClear={allowClear}
          treeData={data}
          filterTreeNode={true}
          treeNodeFilterProp={'title'}
          treeDefaultExpandAll={false}
        />
      </Form.Item>
    </>
  );
};

FormTreeSelectWrapper.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  rules: PropTypes.array,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  classname: PropTypes.string,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.object,
  required: PropTypes.bool,
  allowSearch: PropTypes.bool,
  data: PropTypes.array
};

export default FormTreeSelectWrapper;
