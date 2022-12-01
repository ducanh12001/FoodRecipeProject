import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';
import { AvatarProps, PageHeader } from 'antd';
import history from 'utils/history';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
interface PageHeaderWrapperProps {
  backUrl: string | null;
  hasBack: boolean;
  ghost: boolean;
  title: MessageDescriptor;
  subtitle?: MessageDescriptor | null;
  extra?: React.ReactNode;
  avatar?: AvatarProps;
  children: React.ReactNode;
}

const PageHeaderWrapper = (props: PageHeaderWrapperProps) => {
  const intl = useIntl();
  const naviagate = useNavigate();
  const { ghost = false, children, title, subtitle, extra, avatar, hasBack = true, backUrl } = props;

  return (
    <PageHeader
      backIcon={hasBack ? (<ArrowLeftOutlined/>) : false}
      ghost={ghost}
      onBack={() => backUrl ? naviagate(backUrl) : history.back()}
      title={intl.formatMessage(title)}
      subTitle={subtitle ? intl.formatMessage(subtitle) : null}
      extra={extra}
      avatar={avatar}
    >
      {children}
    </PageHeader>
  );
};

export default PageHeaderWrapper;
