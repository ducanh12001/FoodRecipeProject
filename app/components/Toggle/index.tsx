/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import { injectIntl, IntlShape } from 'react-intl';

const { Option } = Select;

interface ToggleProps {
  onToggle: (...args: any[]) => any;
  intl: IntlShape;
  values: Array<any>;
  value: string;
  messages: any;
}

const Toggle = (props: ToggleProps) => {
  const { values, value, intl, onToggle, messages } = props;
  let content: React.ReactNode = <Option value={null}>--</Option>;
  if (values) {
    content = values.map((optVal) => (
      <Option key={optVal} value={optVal}>
        {messages[optVal] ? intl.formatMessage(messages[optVal]) : optVal}
      </Option>
    ));
  }

  return (
    <Select value={value} onChange={onToggle}>
      {content}
    </Select>
  );
};

// Toggle.propTypes = {
//   onToggle: PropTypes.func,
//   intl: PropTypes.object,
//   values: PropTypes.array,
//   value: PropTypes.string,
//   messages: PropTypes.object,
// };

export default injectIntl(Toggle);
