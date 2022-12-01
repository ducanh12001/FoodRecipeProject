/**
 * Common Messages
 */

import { defineMessages } from 'react-intl';

export const scope = 'routes.messages';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: `Dashboard`,
  },
  emailTemplatePage: {
    id: `${scope}.emailTemplatePage`,
    defaultMessage: `Email Template`,
  },
  userPage: {
    id: `${scope}.userPage`,
    defaultMessage: `User Management`,
  },
  settings: {
    id: `${scope}.settings`,
    defaultMessage: `Settings`,
  },
  recipe: {
    id: `${scope}.recipe`,
    defaultMessage: `My Recipes`,
  },
  recipes: {
    id: `${scope}.recipes`,
    defaultMessage: `Recipes`
  },
  dinners: {
    id: `${scope}.dinners`,
    defaultMessage: 'Dinners',
  },
  news: {
    id: `${scope}.news`,
    defaultMessage: 'News',
  },
  tools: {
    id: `${scope}.tools`,
    defaultMessage: 'Tools',
  },
  books: {
    id: `${scope}.books`,
    defaultMessage: 'Books',
  }
});
