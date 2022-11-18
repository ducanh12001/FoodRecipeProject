/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, IntlShape } from 'react-intl';
import { Select } from 'antd';
const { Option } = Select;
interface ToggleOptionProps{
  value:string,
  message:any,
  intl:IntlShape
}
const ToggleOption = ({ value, message, intl } : ToggleOptionProps) => (
  <Option value={value}>{message ? intl.formatMessage(message) : value}</Option>
);

// ToggleOption.propTypes = {
//   value: PropTypes.string.isRequired,
//   message: PropTypes.object,
//   intl: PropTypes.object,
// };

export default injectIntl(ToggleOption);
