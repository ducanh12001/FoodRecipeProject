import { injectIntl, IntlShape } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormInstance } from 'antd';

/**
 *
 * FormButtonWrapper
 *
 */

const FormButtonWrapper = (props: any) => {
  const {
    label,
    icon,
    intl,
    variant,
    show = true,
    className,
    disabled,
    danger = false,
    form,
  } = props;
  return (
    <>
      {show ? (
        <Form.Item shouldUpdate>
          {() => (
            <Button
              icon={icon}
              loading={disabled}
              type={variant}
              htmlType="submit"
              className={className}
              disabled={
                !!form
                  .getFieldsError()
                  .filter((errors: string[]) => errors.length).length
              }
              danger={danger}
            >
              {intl.formatMessage(label)}
            </Button>
          )}
        </Form.Item>
      ) : (
        ''
      )}
    </>
  );
};

FormButtonWrapper.propTypes = {
  form: PropTypes.object,
  icon: PropTypes.object,
  intl: PropTypes.object,
  disabled: PropTypes.bool,
  show: PropTypes.bool,
  variant: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.object.isRequired,
  danger: PropTypes.bool,
};

export default injectIntl(FormButtonWrapper);
