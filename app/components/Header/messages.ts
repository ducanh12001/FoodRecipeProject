/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Header';

export default defineMessages({
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'My Profile',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Change Password',
  },
  setting: {
    id: `${scope}.setting`,
    defaultMessage: 'Settings',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
  dinners:{
    id: `${scope}.dinners`,
    defaultMessage: 'DINNERS',
  },
  recipes:{
    id: `${scope}.recipes`,
    defaultMessage: 'RECIPES',
  },
  foodNews:{
    id: `${scope}.foodNews`,
    defaultMessage: 'FOOD NEWS',
  },
  tips:{
    id: `${scope}.tips`,
    defaultMessage: 'TIPS & TOOLS',
  },
  addRecipes:{
    id: `${scope}.addRecipes`,
    defaultMessage: 'Add Recipes',
  },
  favoriteRecipes:{
    id: `${scope}.favoriteRecipes`,
    defaultMessage: 'Favorite Recipes',
  },
  manage:{
    id: `${scope}.manage`,
    defaultMessage: 'Manage',
  },
  home:{
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
});
