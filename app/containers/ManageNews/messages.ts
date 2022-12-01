/*
 * Manage Newss Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.ManageNews';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Quản lý Tin tức',
  },
  pictureCol: {
    id: `${scope}.pictureCol`,
    defaultMessage: 'Ảnh'
  },
  titleCol: {
    id: `${scope}.titleCol`,
    defaultMessage: 'Tiêu đề'
  },
  contentCol: {
    id: `${scope}.contentCol`,
    defaultMessage: 'Nội dung'
  },
  detailLabel: {
    id: `${scope}.detailLabel`,
    defaultMessage: 'Chi tiết',
  },
  createNewsHelmetTitle: {
    id: `${scope}.createNewsHelmetTitle`,
    defaultMessage: 'Thêm mới Tin tức'
  },
  createNewsPageheader: {
    id: `${scope}.createNewsPageheader`,
    defaultMessage: 'Thêm mới Tin tức'
  },
  editNewsHelmetTitle: {
    id: `${scope}.editNewsHelmetTitle`,
    defaultMessage: 'Sửa thông tin Tin tức'
  },
  editNewsPageheader: {
    id: `${scope}.editNewsPageheader`,
    defaultMessage: 'Sửa thông tin Tin tức'
  }
});
