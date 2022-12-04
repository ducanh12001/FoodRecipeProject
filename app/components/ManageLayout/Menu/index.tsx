import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeCollapsedSelector,
  makeDeviceSelector,
  makeLoggedInUserSelector,
} from 'containers/App/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapseAction } from 'containers/App/actions';
import { MenuSingle } from 'type/type.menu';
import { menuList } from './list';
const { SubMenu, Item } = Menu;

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  device: makeDeviceSelector(),
  collapsed: makeCollapsedSelector(),
});

const MenuComponent = () => {
  const dispatch = useDispatch();
  const [openKeys, setOpenkeys] = useState<Array<string>>([]);
  const [selectedKeys, setSelectedKeys] = useState<Array<string>>(
    [] as Array<string>,
  );
  const [menuItems, setMenuItems] = useState(new Array<MenuSingle>());

  const { device, collapsed, user } = useSelector(stateSelector);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const getTitle = (menu: MenuSingle) => (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      {menu.icon}
      <span>{menu.name}</span>
    </span>
  );

  const onMenuClick = (menu: MenuSingle) => {
    if (menu.path === pathname) return;
    const { key, path } = menu;
    setSelectedKeys([key]);
    if (device !== 'DESKTOP') {
      dispatch(toggleCollapseAction(true));
    }
    navigate(path);
  };

  useEffect(() => {
    setSelectedKeys([pathname]);
    setOpenkeys(collapsed ? [] : [`/${pathname.split('/')[1]}`]);
  }, [collapsed, pathname]);

  const onOpenChange = (keys: Array<string>) => {
    const key = keys.pop();

    setOpenkeys(key ? [key] : []);
  };

  useEffect(() => {
    setMenuItems(menuList);
  }, []);
    

  return (
    <Menu
      mode="inline"
      theme="light"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      className="manage-layout-page-sider-menu"
    >
      {menuItems?.map((menu) =>
        menu.children ? (
          <SubMenu key={menu.path} title={getTitle(menu)}>
            {menu.children.map((child) => (
              <Item key={child.path} onClick={() => onMenuClick(child)}>
                {child.name}
              </Item>
            ))}
          </SubMenu>
        ) : (
          <Item key={menu.path} onClick={() => onMenuClick(menu)}>
            {getTitle(menu)}
          </Item>
        ),
      )}
    </Menu>
  );
};

export default MenuComponent;
