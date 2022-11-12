import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import history from 'utils/history';

interface PageHeaderWrapperProps {
  title: MessageDescriptor;
  children: React.ReactNode;
}

const PageHeaderWrapper = (props: PageHeaderWrapperProps) => {
  const intl = useIntl();
  const { children, title } = props;

  return (
    <>
      
    </>
  );
};

export default PageHeaderWrapper;
