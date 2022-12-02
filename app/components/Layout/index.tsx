import { BackTop, Drawer, Layout, Menu } from 'antd';
import FooterComponent from 'components/Footer';
import HeaderComponent from 'components/Header';
import 'components/Layout/index.less';
import LoadingIndicator from 'components/LoadingIndicator';
import AlertMessage from 'containers/AlertMessage';
import {
  changeDeviceAction,
  toggleCollapseAction,
} from 'containers/App/actions';
import {
  makeCollapsedSelector,
  makeDeviceSelector,
  makeIsLoggedSelector,
} from 'containers/App/selectors';
import React, { Suspense, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import messages from 'components/Header/messages';

const { Sider, Content } = Layout;
const WIDTH = 992;

const stateSelector = createStructuredSelector({
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
  isLogged: makeIsLoggedSelector(),
});

const LayoutPage = () => {
  const dispatch = useDispatch();
  const { device, collapsed, isLogged } =
    useSelector(stateSelector);
  const isMobile = device === 'MOBILE';
  const location = useLocation();
  const navigate = useNavigate();

  const toggle = () => dispatch(toggleCollapseAction(!collapsed));

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
  
  useEffect(() => {
    window.onresize = () => {
      const deviceType = /(iPhone|iPad|iPod|iOS|Android)/i.test(
        navigator.userAgent,
      )
        ? 'MOBILE'
        : 'DESKTOP';
      dispatch(changeDeviceAction(deviceType));
      const rect = document.body.getBoundingClientRect();
      const needCollapse = rect.width < WIDTH;
      dispatch(toggleCollapseAction(needCollapse));
    };
  }, []);

  return (
    <Layout className="layout-page">
      <HeaderComponent />
      <Drawer
        width="200"
        placement="left"
        bodyStyle={{ padding: 0, height: '100%' }}
        closable={false}
        onClose={toggle}
        visible={!collapsed}
      >
        <Menu
          mode="inline"
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
      </Drawer>
      <Layout>
        <Content className="layout-page-content">
          <AlertMessage />
          <Suspense fallback={<LoadingIndicator />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
      <FooterComponent />
      <BackTop />
    </Layout>
  );
};

export default LayoutPage;
