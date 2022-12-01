/*
 * Manage Dinners Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.ManageDinner';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Quản lý Bữa tối',
  },
  pictureCol: {
    id: `${scope}.pictureCol`,
    defaultMessage: 'Ảnh'
  },
  titleCol: {
    id: `${scope}.titleCol`,
    defaultMessage: 'Tiêu đề'
  },
  detailLabel: {
    id: `${scope}.detailLabel`,
    defaultMessage: 'Chi tiết',
  },
  createDinnerHelmetTitle: {
    id: `${scope}.createDinnerHelmetTitle`,
    defaultMessage: 'Thêm mới Bữa tối'
  },
  createDinnerPageheader: {
    id: `${scope}.createDinnerPageheader`,
    defaultMessage: 'Thêm mới Bữa tối'
  },
  editDinnerHelmetTitle: {
    id: `${scope}.editDinnerHelmetTitle`,
    defaultMessage: 'Sửa thông tin Bữa tối'
  },
  editDinnerPageheader: {
    id: `${scope}.editDinnerPageheader`,
    defaultMessage: 'Sửa thông tin Bữa tối'
  }
});
