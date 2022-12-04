import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import history from 'utils/history';
import 'components/PageCommonWrapper/index.less';

interface PageHeaderWrapperProps {
  title: MessageDescriptor;
  children: React.ReactNode;
  imageSrc: string | null;
  description?: MessageDescriptor;
}

const PageCommonWrapper = (props: PageHeaderWrapperProps) => {
  const intl = useIntl();
  const { children, title, imageSrc, description } = props;

  return (
    <div className="common-page">
      <div className="common-page-header">
        {imageSrc &&
        <img className="title-image" src={require(`../../assets/images/headImage/${imageSrc}`)} alt="" />
        }
      </div>
      <div className="common-page-title">
        <h1>{intl.formatMessage(title)}</h1>
        <div className="description">{intl.formatMessage(description)}</div>
      </div>
      {children}
    </div>
  );
};

export default PageCommonWrapper;
