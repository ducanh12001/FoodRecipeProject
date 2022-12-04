/*
 * Manage Recipes Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.ManageRecipe';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Quản lý Công thức',
  },
  pictureCol: {
    id: `${scope}.pictureCol`,
    defaultMessage: 'Ảnh'
  },
  nameCol: {
    id: `${scope}.nameCol`,
    defaultMessage: 'Tên món'
  },
  detailLabel: {
    id: `${scope}.detailLabel`,
    defaultMessage: 'Chi tiết',
  },
  createRecipeHelmetTitle: {
    id: `${scope}.createRecipeHelmetTitle`,
    defaultMessage: 'Thêm mới Công thức'
  },
  createRecipePageheader: {
    id: `${scope}.createRecipePageheader`,
    defaultMessage: 'Thêm mới Công thức'
  },
  editRecipeHelmetTitle: {
    id: `${scope}.editRecipeHelmetTitle`,
    defaultMessage: 'Sửa thông tin Công thức'
  },
  editRecipePageheader: {
    id: `${scope}.editRecipePageheader`,
    defaultMessage: 'Sửa thông tin Công thức'
  }
});
