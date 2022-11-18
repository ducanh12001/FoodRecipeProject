/*
 * Reset Password Messages
 *
 * This contains all the text for the Reset Password container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.ResetPassword';

export default defineMessages({
  helmetResetPasswordTitle: {
    id: `${scope}.helmetResetPasswordTitle`,
    defaultMessage: 'Trang đổi mật khẩu',
  },
  resetPassword: {
    id: `${scope}.resetPassword`,
    defaultMessage: 'Đổi mật khẩu',
  },
  resetSuccess: {
    id: `${scope}.resetSuccess`,
    defaultMessage: 'Mật khẩu đã được đổi thành công!',
  },
  resetPasswordBtn: {
    id: `${scope}.resetPasswordBtn`,
    defaultMessage: 'Lưu',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Quay lại',
  },
  oldPasswordPlaceHoder: {
    id: `${scope}.oldPasswordPlaceHoder`,
    defaultMessage: 'Nhập mật khẩu cũ',
  },
  newPasswordPlaceHoder: {
    id: `${scope}.newPasswordPlaceHoder`,
    defaultMessage: 'Nhập mật khẩu mới',
  },
  reNewPasswordPlaceHoder: {
    id: `${scope}.reNewPasswordPlaceHoder`,
    defaultMessage: 'Nhập lại mật khẩu mới',
  }
});
