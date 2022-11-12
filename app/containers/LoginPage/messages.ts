/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.LoginPage';

export default defineMessages({
  back: {
    id: `${scope}.back`,
    defaultMessage: 'Quay lại',
  },
  "error.102007": {
    id: `${scope}.error.102007`,
    defaultMessage: 'Thông tin tài khoản, mật khẩu không chính xác. Vui lòng nhập lại.',
  },
  sessionOut: {
    id: `${scope}.sessionOut`,
    defaultMessage: 'Phiên đăng nhập hết hạn',
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: 'Vui lòng thử lại sau giây lát!',
  },
  loginToTheSystem: {
    id: `${scope}.loginToTheSystem`,
    defaultMessage: 'Đăng nhập',
  },
  loginSuccess: {
    id: `${scope}.loginSuccess`,
    defaultMessage: 'Đăng nhập thành công!',
  },
  helmetLoginTitle: {
    id: `${scope}.helmetLoginTitle`,
    defaultMessage: 'Đăng nhập',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Đăng nhập',
  },
  lostPassword: {
    id: `${scope}.lostPassword`,
    defaultMessage: 'Quên mật khẩu?',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'đăng ký ngay!',
  },
  rememberMe: {
    id: `${scope}.rememberMe`,
    defaultMessage: 'Ghi nhớ đăng nhập',
  },
});
