import React, { useEffect, useState } from 'react';
import {
  FormOutlined,
  HeartOutlined,
  KeyOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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

  const isMobile = device === 'MOBILE';
  const toggle = () => dispatch(toggleCollapseAction(!collapsed));

  const handleProfileMenuClick = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
    if (key === '1') {
      navigate('/profile')
    } else if (key === '2') {
      navigate('/create-recipe')
    } else if (key === '3') {
      navigate('/saved-recipe')
    } else if (key === '4') {
      dispatch(logoutAction())
    } else if (key === '5') {
      navigate('/manage-recipe')
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
          label: <FormattedMessage {...messages.addRecipes} />,
          icon: <PlusCircleOutlined />,
          key: '2'
        },
        {
          label: <FormattedMessage {...messages.favoriteRecipes} />,
          icon: <HeartOutlined />,
          key: '3'
        },
        {
          label: <FormattedMessage {...messages.manage} />,
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

  const handleHomeMenuClick = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
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
        {!isMobile ? (
          <div
            className="logo"
            style={{ width: 200, cursor: 'pointer' }}
            onClick={toHomepage}
          >
            <div>Food Recipe</div>
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
        {!isMobile ?
          <div className="head-menu">
            <Menu
              mode="horizontal"
              items={[
                {
                  label: <FormattedMessage {...messages.dinners} />,
                  key: "1"
                },
                {
                  label: <FormattedMessage {...messages.recipes} />,
                  key: "2"
                },
                {
                  label: <FormattedMessage {...messages.foodNews} />,
                  key: "3"
                },
                {
                  label: <FormattedMessage {...messages.tips} />,
                  key: "4"
                },
              ]}
              onClick={handleHomeMenuClick}
            />
          </div> : <></>
        }
        <div className="layout-page-header-main">
          <div tabIndex={0} aria-hidden="true" onClick={toggle} role="button">
            <span id="sidebar-trigger">
              {isLogged ?
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

export default HeaderComponent;
