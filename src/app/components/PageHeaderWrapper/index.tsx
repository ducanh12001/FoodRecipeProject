import React from 'react';
import { AvatarProps, PageHeader } from 'antd';
import history from '../../utils/history';
interface PageHeaderWrapperProps {
  ghost: boolean;
  title: string;
  subtitle: string;
  extra: React.ReactNode;
  avatar: AvatarProps;
  children: React.ReactNode;
}

const PageHeaderWrapper = (props: PageHeaderWrapperProps) => {
  const { ghost = false, children, title, subtitle, extra, avatar } = props;

  return (
    <PageHeader
      ghost={ghost}
      onBack={() => history.back()}
      title={title}
      subTitle={subtitle ? subtitle : null}
      extra={extra}
      avatar={avatar}
    >
      {children}
    </PageHeader>
  );
};

export default PageHeaderWrapper;
