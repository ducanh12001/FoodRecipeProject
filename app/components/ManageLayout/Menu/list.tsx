import icons from 'assets/images/icons/IconAll';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from 'routes/messages';
import { MenuSingle } from 'type/type.menu';

export const menuList: MenuSingle[] = [
  {
    name: <FormattedMessage {...messages.recipes} />,
    icon: <img className="img-sidebar" src={icons.MenuIcon} />,
    key: 'manage-recipe',
    path: '/manage-recipe',
    method: 'get',
    resource: 'manageRecipe',
    defaultPermission: false,
  },
  {
    name: <FormattedMessage {...messages.books} />,
    icon: <img className="img-sidebar" src={icons.MenuIcon} />,
    key: 'manage-book',
    path: '/manage-book',
    method: 'get',
    resource: 'manageBook',
    defaultPermission: false,
  },
  {
    name: <FormattedMessage {...messages.news} />,
    icon: <img className="img-sidebar" src={icons.MenuIcon} />,
    key: 'manage-news',
    path: '/manage-news',
    method: 'get',
    resource: 'manageNews',
    defaultPermission: false,
  },
  {
    name: <FormattedMessage {...messages.tools} />,
    icon: <img className="img-sidebar" src={icons.MenuIcon} />,
    key: 'manage-tool',
    path: '/manage-tool',
    method: 'get',
    resource: 'manageTool',
    defaultPermission: false,
  },
];
