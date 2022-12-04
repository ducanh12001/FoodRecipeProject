/*
 * Change Password Messages
 *
 * This contains all the text for the Change Password container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.ChangePassword';

export default defineMessages({
  helmetChangePasswordTitle: {
    id: `${scope}.helmetChangePasswordTitle`,
    defaultMessage: 'Đổi mật khẩu',
  },
  pageHeader: {
    id: `${scope}.pageHeader`,
    defaultMessage: 'Thay đổi mật khẩu đăng nhập',
  },
  changePassword: {
    id: `${scope}.changePassword`,
    defaultMessage: 'Đổi mật khẩu',
  },
  changeSuccess: {
    id: `${scope}.changeSuccess`,
    defaultMessage: 'Mật khẩu đã được đổi thành công!',
  },
  changePasswordBtn: {
    id: `${scope}.changePasswordBtn`,
    defaultMessage: 'Lưu',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Quay lại',
  },
  oldPasswordLabel: {
    id: `${scope}.oldPasswordLabel`,
    defaultMessage: 'Mật khẩu hiện tại',
  },
  oldPasswordPlaceHoder: {
    id: `${scope}.oldPasswordPlaceHoder`,
    defaultMessage: 'Nhập mật khẩu hiện tại',
  },
  newPasswordLabel: {
    id: `${scope}.newPasswordLabel`,
    defaultMessage: 'Mật khẩu mới',
  },
  newPasswordPlaceHoder: {
    id: `${scope}.newPasswordPlaceHoder`,
    defaultMessage: 'Nhập mật khẩu mới',
  },
  confirmNewPasswordLabel: {
    id: `${scope}.confirmNewPasswordLabel`,
    defaultMessage: 'Xác nhận mmật khẩu mới',
  },
  confirmNewPasswordPlaceholder: {
    id: `${scope}.confirmNewPasswordPlaceholder`,
    defaultMessage: 'Nhập lại mật khẩu mới',
  },
  "error.102013": {
    id: `${scope}.error.102013`,
    defaultMessage: 'Mật khẩu hiện tại không đúng.',
  },
});
