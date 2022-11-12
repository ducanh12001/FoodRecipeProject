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
  order: {
    id: `${scope}.order`,
    defaultMessage: `My Orders`,
  },
  market: {
    id: `${scope}.market`,
    defaultMessage: `Market`,
  },
  product: {
    id: `${scope}.product`,
    defaultMessage: `My Products`,
  },
  productCategory: {
    id: `${scope}.productCategory`,
    defaultMessage: `Product Category`
  },
  productUnit: {
    id: `${scope}.productUnit`,
    defaultMessage: `Product Unit`
  },
  deliveryArea: {
    id: `${scope}.deliveryArea`,
    defaultMessage: `Delivery Area`
  },
  variantType:{
    id: `${scope}.variantType`,
    defaultMessage: `Variant Type`
  },
  orders: {
    id: `${scope}.orders`,
    defaultMessage: `Orders`
  },
  buyerOrder: {
    id: `${scope}.buyerOrder`,
    defaultMessage: `Buyer Order`
  },
  sellerOrder: {
    id: `${scope}.sellerOrder`,
    defaultMessage: `Seller Order`
  },
  companies: {
    id: `${scope}.companies`,
    defaultMessage: `Companies`
  }
});
