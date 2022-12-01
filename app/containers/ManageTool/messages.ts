/*
 * Manage Tools Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.ManageTool';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Quản lý Mẹo và công cụ',
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
  createToolHelmetTitle: {
    id: `${scope}.createToolHelmetTitle`,
    defaultMessage: 'Thêm mới Mẹo và công cụ'
  },
  createToolPageheader: {
    id: `${scope}.createToolPageheader`,
    defaultMessage: 'Thêm mới Mẹo và công cụ'
  },
  editToolHelmetTitle: {
    id: `${scope}.editToolHelmetTitle`,
    defaultMessage: 'Sửa thông tin Mẹo và công cụ'
  },
  editToolPageheader: {
    id: `${scope}.editToolPageheader`,
    defaultMessage: 'Sửa thông tin Mẹo và công cụ'
  }
});
