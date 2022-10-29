import React from 'react';
import PropTypes from 'prop-types';
import { Form, Row } from 'antd';

const FormWrapper = (props: any) => {
  const {
    layout,
    forminstance,
    children,
    device,
    name,
    className,
    values,
    responsive = false,
  } = props;
  
  return (
    <Form
      {...props}
      {...(device === 'MOBILE' ? { layout: 'vertical' } : layout)}
      scrollToFirstError
      className={className}
      form={forminstance}
      name={name}
      initialValues={values}
    >
      {responsive ? <Row>{children}</Row> : children}
    </Form>
  );
};

FormWrapper.propTypes = {
  forminstance: PropTypes.object,
  children: PropTypes.node,
  device: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  values: PropTypes.object,
  layout: PropTypes.object,
  responsive: PropTypes.bool,
  onFinish: PropTypes.func,
};

export default FormWrapper;
