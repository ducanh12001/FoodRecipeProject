import { Button, Descriptions } from 'antd'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
import commonMessage from 'common/messages';
import { useNavigate } from 'react-router-dom';

function PersonInfo({ user }: any) {
    const navigate = useNavigate();
    return (
        <>
        <div className="manage-table profile-details-card">
            <Descriptions labelStyle={{ fontWeight: 700 }} column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}>
                <Descriptions.Item label={<FormattedMessage {...commonMessage.nameLabel} />}>{user.name}</Descriptions.Item>
                <Descriptions.Item label={<FormattedMessage {...commonMessage.emailLabel} />}>{user.email}</Descriptions.Item>
            </Descriptions>
        </div>
        <Button onClick={() => navigate('/account-setting')}>
            <FormattedMessage {...messages.editProfileLabel} />
          </Button>
        </>
    )
}

export default PersonInfo