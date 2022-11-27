import React, { useEffect, useState } from 'react';
import {
  FormOutlined,
  HeartOutlined,
  KeyOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Affix, Avatar, Dropdown, Layout, Menu, Popover } from 'antd';
import icons from 'assets/images/icons/IconAll';
import LongLogoSvg from 'assets/images/logo/fr-logo.svg';
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
import saga from 'containers/App/saga';
import reducer from 'containers/App/reducer';

const key = 'global';

const { Header } = Layout;

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
  isLogged: makeIsLoggedSelector(),
  isLoading: makeIsLoadingSelector(),
});

function HeaderComponent(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const { user, isLogged, device, collapsed, } =
    useSelector(stateSelector);

  const toggle = () => dispatch(toggleCollapseAction(!collapsed));

  const handleProfileMenuClick = ({ item, key, keyPath, selectedKeys, domEvent }:any) => {
    if (key === '1') {
      navigate('/profile')
    } else if (key === '2') {
      navigate('/create-recipe')
    } else if (key === '3') {
      navigate('/saved-recipe')
    } else if (key === '4') {
      dispatch(logoutAction())
    } else if (key === '5') {
      navigate('/home')
    }
  }

  const menu = (
    <Menu 
      items={[
        {
          label: 'Profile',
          icon: <UserOutlined />,
          key: '1',
        },
        {
          label: 'Add recipe',
          icon :<PlusCircleOutlined />,
          key: '2'
        },
        {
          label: 'Favourite ricipes',
          icon: <HeartOutlined />,
          key: '3'
        },
        {
          label: 'Manage',
          icon: <FormOutlined />,
          key: '5'
        },
        {
          label: <FormattedMessage {...messages.logout} />,
          icon: <LogoutOutlined />,
          key: '4'
        },
      ]}
      onClick={handleProfileMenuClick}
    />
  )

  const handleHomeMenuClick = ({ item, key, keyPath, selectedKeys, domEvent }:any) => {
    if (key === '1') {
      navigate('/dinners')
    } else if (key === '2') {
      navigate('/recipe-ideas')
    } else if (key === '3') {
      navigate('/food-news')
    } else if (key === '4') {
      navigate('/kitchen-tools')
    } else {
      navigate('/home')
    }
  }

  const toLogin = () => {
    navigate('/login');
  };

  const toHomepage = () => {
    navigate('/home');
  };

  return (
    <Affix offsetTop={0}>
      <Header className="layout-page-header">
        {device !== 'MOBILE' && (
          <div
            className="logo"
            style={{ width: 200, cursor: 'pointer' }}
            onClick={toHomepage}
          >
              Food Recipe
          </div>
        )}
        <Menu
            style={{ flex: 2 }}
            mode="horizontal"
            items={[
              {
                label: 'DINNERS',
                key: "1"
              },
              {
                label: 'RECIPES',
                key: "2"
              },
              {
                label: 'FOOD NEWS',
                key: "3"
              },
              {
                label: 'TIPS & TOOLS',
                key: "4"
              },
            ]}
            onClick={handleHomeMenuClick}
          />
        <div className="layout-page-header-main">
        
          <div className="actions">
            <LocaleToggle />
            {isLogged ? (
              <Dropdown overlay={menu} trigger={['click']}>
                <span className="user-action">
                  {user.avatar ? (
                    <Avatar src={user.avatar} />
                  ) : (
                    <Avatar
                      style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      {user?.fullName ||
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

export default HeaderComponent;
