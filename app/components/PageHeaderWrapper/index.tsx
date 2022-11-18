import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import history from 'utils/history';
import 'components/PageHeaderWrapper/index.less';

interface PageHeaderWrapperProps {
  //title: MessageDescriptor;
  title: string;
  children: React.ReactNode;
  imageSrc: string | null;
  description: string;
}

const PageHeaderWrapper = (props: PageHeaderWrapperProps) => {
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
        <h1>{title}</h1>
        <div className="description">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default PageHeaderWrapper;
