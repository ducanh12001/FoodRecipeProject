import { Affix, Avatar, Dropdown, Layout, Menu } from 'antd'
import LocaleToggle from 'containers/LocaleToggle'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect';
import {
    makeCollapsedSelector,
    makeDeviceSelector,
    makeIsLoadingSelector,
    makeIsLoggedSelector,
    makeLoggedInUserSelector,
} from 'containers/App/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleCollapseAction } from 'containers/App/actions';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import messages from 'components/Header/messages';

const { Header } = Layout;

const stateSelector = createStructuredSelector({
    user: makeLoggedInUserSelector(),
    device: makeDeviceSelector(),
    collapsed: makeCollapsedSelector(),
    isLogged: makeIsLoggedSelector(),
    isLoading: makeIsLoadingSelector(),
});

function ManageHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLogged, device, collapsed, } = useSelector(stateSelector);

    const toggle = () => dispatch(toggleCollapseAction(!collapsed));

    const menu = (
        <Menu 
          items={[
            {
              label: <FormattedMessage {...messages.profile} />,
              icon: <UserOutlined />,
              key: '1',
            },
            {
              label: <FormattedMessage {...messages.logout} />,
              icon: <LogoutOutlined />,
              key: '2'
            },
          ]}
        />
      )

    return (
        <Affix offsetTop={0}>
            <Header className="layout-page-header">
                {device !== 'MOBILE' && (
                    <div
                        className="logo"
                        style={{ width: 200, cursor: 'pointer' }}
                        
                    >
                        Food Recipe
                    </div>
                )}
                <div className="layout-page-header-main">

                    <div className="actions">
                        <LocaleToggle />
                        {isLogged ? (
                            <Dropdown overlay={menu} trigger={['click']}>
                                <span className="user-action">
                                    {user.profile_image ? (
                                        <Avatar src={user.profile_image} />
                                    ) : (
                                        <Avatar
                                            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                                        >
                                            {user?.name ||
                                                ''
                                                    .split(' ')
                                                    .map((name) => name[0])
                                                    .join('')
                                                    .toUpperCase()}
                                        </Avatar>
                                    )}
                                </span>
                            </Dropdown>
                        ) : (
                            <span
                                aria-hidden="true"
                                style={{ cursor: 'pointer', fontSize: 16 }}
                                onClick={toLogin}
                            >
                                <FormattedMessage {...messages.login} />
                            </span>
                        )}
                    </div>
                </div>
            </Header>
        </Affix>
    )
}

export default ManageHeader