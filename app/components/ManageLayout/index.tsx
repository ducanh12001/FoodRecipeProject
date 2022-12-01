import { BackTop, Drawer, Layout } from 'antd';
import 'components/ManageLayout/index.less';
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
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ManageHeader from './manageHeader';
import MenuComponent from './Menu';

const { Sider, Content } = Layout;
const WIDTH = 992;

const stateSelector = createStructuredSelector({
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
  isLogged: makeIsLoggedSelector(),
});

const ManageLayoutPage = () => {
  const dispatch = useDispatch();
  const { device, collapsed, isLogged } =
    useSelector(stateSelector);
  const isMobile = device === 'MOBILE';
  const location = useLocation();
  const navigate = useNavigate();

  const toggle = () => dispatch(toggleCollapseAction(!collapsed));

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

      setWidth();
    };
  }, []);

  function setWidth() {
    let cart = document.getElementById("cart");
    let bottomBar = document.getElementById("bottomBar");
    if (cart && bottomBar) {
      let style = window.getComputedStyle(cart);
      let wdt = style.getPropertyValue('width');
      bottomBar.style.width = wdt;
    }
  }

  return (
    <Layout className="manage-layout-page">
      <ManageHeader collapsed={collapsed} toggle={toggle} />
      <Layout>
        {isLogged ? 
        !isMobile ? (
          <Sider
            className="manage-layout-page-sider"
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={60}
            breakpoint="md"
          >
            <MenuComponent />
          </Sider>
        ) : (
          <Drawer
            width="200"
            placement="left"
            bodyStyle={{ padding: 0, height: '100%' }}
            closable={false}
            onClose={toggle}
            visible={!collapsed}
          >
            <MenuComponent />
          </Drawer>
        )
        :
        <></>
      }
        <Content className="manage-layout-page-content">
          <AlertMessage />
          <Suspense fallback={<LoadingIndicator />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManageLayoutPage;
