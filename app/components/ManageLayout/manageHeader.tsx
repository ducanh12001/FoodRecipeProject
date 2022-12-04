import React, { useEffect } from 'react';
import {
  HomeOutlined,
  KeyOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Dropdown, Layout, Menu, Popover } from 'antd';
import messages from 'components/Header/messages';
import { logoutAction, toggleCollapseAction } from 'containers/App/actions';
import {
  makeCollapsedSelector,
  makeDeviceSelector,
  makeIsLoadingSelector,
  makeIsLoggedSelector,
  makeLoggedInUserSelector,
} from 'containers/App/selectors';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

const { Header } = Layout;

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
  isLogged: makeIsLoggedSelector(),
  isLoading: makeIsLoadingSelector(),
});

function ManageHeader(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLogged, device, collapsed } =
    useSelector(stateSelector);

  const toggle = () => dispatch(toggleCollapseAction(!collapsed));
  const isMobile = device === 'MOBILE';

  const handleMenuClick = ({ item, key, keyPath, selectedKeys, domEvent }:any) => {
    if (key === '1') {
      navigate('/profile')
    } else if (key === '2') {
      navigate('/change-password')
    } else if (key === '3') {
      navigate('/home')
    } else if (key === '4') {
      dispatch(logoutAction())
    } 
  }

  const menu = (
    <Menu 
      items={[
        {
          label: <FormattedMessage {...messages.profile} />,
          icon: <UserOutlined />,
          key: '1',
        },
        {
          label: <FormattedMessage {...messages.changePassword} />,
          icon: <KeyOutlined />,
          key: '2',
        },
        {
          label: <FormattedMessage {...messages.home} />,
          icon: <HomeOutlined />,
          key: '3',
        },
        {
          label: <FormattedMessage {...messages.logout} />,
          icon: <LogoutOutlined />,
          key: '4',
        },
      ]}
      onClick={handleMenuClick}
    />
  )

  const toLogin = () => {
    navigate('/login');
  };

  const toHomepage = () => {
    navigate('/manage-recipe');
  };

  return (
    <Affix offsetTop={0}>
      <Header className="manage-layout-page-header">
        {!isMobile ? (
          <div
            className="logo"
            style={{ width: collapsed && isLogged ? 60 : 200, cursor: 'pointer' }}
            onClick={toHomepage}
          >
            {isLogged ? (
              collapsed ? (
                <div>FR</div>
              ) : (
                <div>Food Recipe</div>
              )
            ) : (
                <div>Food Recipe</div>
            )}
          </div>
          ) :
          (
            <div
              className="logo"
              style={{ width: 60, cursor: 'pointer' }}
              onClick={toHomepage}
            >
              <div>FR</div>
            </div>
          )
        }
        <div className="manage-layout-page-header-main">
          <div tabIndex={0} aria-hidden="true" onClick={toggle} role="button">
            <span id="sidebar-trigger">
              { isLogged ?
                  collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                : <></>
              }
            </span>
          </div>

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
  );
}

export default ManageHeader;
