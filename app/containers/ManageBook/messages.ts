/*
 * Manage Book Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.ManageBook';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Quản lý Sách',
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
  createBookHelmetTitle: {
    id: `${scope}.createBookHelmetTitle`,
    defaultMessage: 'Thêm mới Sách'
  },
  createBookPageheader: {
    id: `${scope}.createBookPageheader`,
    defaultMessage: 'Thêm mới Sách'
  },
  editBookHelmetTitle: {
    id: `${scope}.editBookHelmetTitle`,
    defaultMessage: 'Sửa thông tin Sách'
  },
  editBookPageheader: {
    id: `${scope}.editBookPageheader`,
    defaultMessage: 'Sửa thông tin Sách'
  }
});
