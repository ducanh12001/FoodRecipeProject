import { QuestionCircleOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';
import messages from 'components/ConfirmDelete/messages';
import React from 'react';
import { IntlShape, injectIntl } from 'react-intl';

interface Props {
  name: string;
  onClickAccept: (...args: any) => any;
  intl: IntlShape;
  children: React.ReactNode;
  placement: TooltipPlacement | undefined;
  disabled: boolean;
}

function ConfirmDelete(props: Props) {
  const { name, onClickAccept, intl, children, placement = 'left', disabled } = props;

  return (
    <Popconfirm
      disabled={disabled}
      placement={placement}
      title={`${intl.formatMessage(messages.questionTitle)} ${name.trim()}?`}
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={onClickAccept}
      cancelButtonProps={{ danger: true }}
      okText={intl.formatMessage(messages.submit)}
      cancelText={intl.formatMessage(messages.cancel)}
    >
      {children}
    </Popconfirm>
  );
}

export default injectIntl(ConfirmDelete);
