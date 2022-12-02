/**
 * Common Messages
 */

import { defineMessages } from 'react-intl';

export const scope = 'common.messages';

export default defineMessages({
  success: {
    id: `${scope}.success`,
    defaultMessage: 'Thành công',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'Lỗi',
  },
  warning: {
    id: `${scope}.warning`,
    defaultMessage: 'Cảnh báo',
  },
  info: {
    id: `${scope}.info`,
    defaultMessage: 'Thông tin',
  },
  primary: {
    id: `${scope}.primary`,
    defaultMessage: 'Thông điệp',
  },
  invalidRefresh: {
    id: `${scope}.invalidRefresh`,
    defaultMessage: 'Hết phiên làm việc',
  },
  internalError: {
    id: `${scope}.internalError`,
    defaultMessage: 'Có lỗi xảy ra, vui lòng thử lại sau.',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Lưu',
  },
  complete: {
    id: `${scope}.complete`,
    defaultMessage: 'Hoàn thành',
  },
  sourceCode: {
    id: `${scope}.sourceCode`,
    defaultMessage: 'Mã nguồn',
  },
  hideCode: {
    id: `${scope}.hideCode`,
    defaultMessage: 'Ẩn mã',
  },
  showCode: {
    id: `${scope}.showCode`,
    defaultMessage: 'Hiện mã',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Hủy',
  },
  okLabel: {
    id: `${scope}.okLabel`,
    defaultMessage: 'Đồng ý',
  },
  unauthorized: {
    id: `${scope}.unauthorized`,
    defaultMessage: `Sai thông tin đăng nhập`,
  },
  forbidden: {
    id: `${scope}.forbidden`,
    defaultMessage: `Bạn không có quyền thực hiện hành động này, vui lòng liên hệ quản trị hệ thống để biết thêm chi tiết.`,
  },
  addLabel: {
    id: `${scope}.addLabel`,
    defaultMessage: `Thêm mới`,
  },
  editLabel: {
    id: `${scope}.editLabel`,
    defaultMessage: `Chỉnh sửa`,
  },
  deleteLabel: {
    id: `${scope}.deleteLabel`,
    defaultMessage: `Xóa`,
  },
  actionLabel: {
    id: `${scope}.actionLabel`,
    defaultMessage: `Hành động`,
  },
  viewLabel: {
    id: `${scope}.viewLabel`,
    defaultMessage: `Xem`,
  },
  removeLabel: {
    id: `${scope}.removeLabel`,
    defaultMessage: `Xóa`,
  },
  addSuccess: {
    id: `${scope}.addSuccess`,
    defaultMessage: `Dữ liệu được xóa thành công!`,
  },
  pagination: {
    id: `${scope}.pagination`,
    defaultMessage: `hiển thị {start} tới {end} trên tổng số {total}`,
  },
  updateSuccess: {
    id: `${scope}.updateSuccess`,
    defaultMessage: `Dữ liệu được cập nhật thành công!`,
  },
  serverError: {
    id: `${scope}.serverError`,
    defaultMessage: 'Vui lòng thử lại trong giây lát!',
  },
  weakPassword: {
    id: `${scope}.weakPassword`,
    defaultMessage:
      'Password should contain at least one lowercase letter, one uppercase letter, one numeric digit, one special character and should be minimum 6 characters and maximum upto 20 characters!!',
  },
  listNumberLabel: {
    id: `${scope}.listNumberLabel`,
    defaultMessage: 'STT',
  },
  nameLabel: {
    id: `${scope}.nameLabel`,
    defaultMessage: 'Tên đầy đủ',
  },
  descriptionLabel: {
    id: `${scope}.descriptionLabel`,
    defaultMessage: 'Mô tả',
  },
  namePlaceHolder: {
    id: `${scope}.namePlaceHolder`,
    defaultMessage: 'Nhập họ và tên!',
  },
  usernamePlaceHolder: {
    id: `${scope}.usernamePlaceHolder`,
    defaultMessage: 'Nhập tên đăng nhập!',
  },
  addressPlaceHolder: {
    id: `${scope}.addressPlaceHolder`,
    defaultMessage: 'Nhập địa chỉ!',
  },
  displayName: {
    id: `${scope}.displayName`,
    defaultMessage: 'Tên',
  },
  addressLabel: {
    id: `${scope}.addressLabel`,
    defaultMessage: 'Địa chỉ',
  },
  usernameLabel: {
    id: `${scope}.usernameLabel`,
    defaultMessage: 'Tên đăng nhập',
  },
  fullnameLabel: {
    id: `${scope}.fullnameLabel`,
    defaultMessage: 'Tên đầy đủ',
  },
  birthdayLabel: {
    id: `${scope}.birthdayLabel`,
    defaultMessage: 'Ngày Sinh',
  },
  birthdayPlaceHolder: {
    id: `${scope}.birthdayPlaceHolder`,
    defaultMessage: 'Chọn/nhập ngày sinh',
  },
  passwordLabel: {
    id: `${scope}.passwordLabel`,
    defaultMessage: 'Mật khẩu',
  },
  oldPasswordLabel: {
    id: `${scope}.oldPasswordLabel`,
    defaultMessage: 'Mật khẩu hiện tại',
  },
  newPasswordLabel: {
    id: `${scope}.newPasswordLabel`,
    defaultMessage: 'Mật khẩu mới',
  },
  emailLabel: {
    id: `${scope}.emailLabel`,
    defaultMessage: 'Email',
  },
  emailPlaceHolder: {
    id: `${scope}.emailPlaceHolder`,
    defaultMessage: 'Nhập email',
  },
  positionLabel: {
    id: `${scope}.positionLabel`,
    defaultMessage: 'Chức vụ',
  },
  positionPlaceHolder: {
    id: `${scope}.positionPlaceHolder`,
    defaultMessage: 'Nhập chức vụ',
  },
  genderLabel: {
    id: `${scope}.genderLabel`,
    defaultMessage: 'Giới tính',
  },

  genderPlaceHolder: {
    id: `${scope}.genderPlaceHolder`,
    defaultMessage: 'Chọn giới tính',
  },
  fullnamePlaceHolder: {
    id: `${scope}.fullnamePlaceHolder`,
    defaultMessage: 'Nhập họ và tên',
  },
  confirmPasswordLabel: {
    id: `${scope}.confirmPasswordLabel`,
    defaultMessage: 'Mật khẩu xác nhận',
  },
  passwordPlaceHolder: {
    id: `${scope}.passwordPlaceHolder`,
    defaultMessage: 'Nhập mật khẩu',
  },
  newPasswordNewPlaceHolder: {
    id: `${scope}.newPasswordPlaceHolder`,
    defaultMessage: 'Nhập mật khẩu mới',
  },
  confirmNewPasswordNewPlaceHolder: {
    id: `${scope}.confirmNewPasswordNewPlaceHolder`,
    defaultMessage: 'Nhập mật khẩu xác nhận',
  },
  phoneNumberLabel: {
    id: `${scope}.phoneNumberLabel`,
    defaultMessage: 'Số điện thoại',
  },
  phoneNumberPlaceHolder: {
    id: `${scope}.phoneNumberPlaceholder`,
    defaultMessage: 'Nhập số điện thoại',
  },
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: 'Vui lòng nhập email!',
  },
  accountIsEmail: {
    id: `${scope}.accountIsEmail`,
    defaultMessage: 'Email không hợp lệ!',
  },
  validEmailRequired: {
    id: `${scope}.validEmailRequired`,
    defaultMessage: 'Email không hợp lệ!',
  },
  passwordRequired: {
    id: `${scope}.passwordRequired`,
    defaultMessage: 'Vui lòng nhập mật khẩu!',
  },
  usernameRequired: {
    id: `${scope}.usernameRequired`,
    defaultMessage: 'Vui lòng nhập tên đăng nhập!',
  },
  phoneRequired: {
    id: `${scope}.phoneRequired`,
    defaultMessage: 'Vui lòng nhập số điện thoại!',
  },
  phoneInvalid: {
    id: `${scope}.phoneInvalid`,
    defaultMessage: 'Số điện thoại không hợp lệ, vui lòng kiểm tra lại!',
  },
  nameRequired: {
    id: `${scope}.nameRequired`,
    defaultMessage: 'Vui lòng nhập tên!',
  },
  confirmPasswordRequired: {
    id: `${scope}.confirmPasswordRequired`,
    defaultMessage: 'Vui lòng nhập mật khẩu xác nhận!',
  },
  confirmPasswordMatchError: {
    id: `${scope}.confirmPasswordMatchError`,
    defaultMessage: 'Mật khẩu xác nhận không khớp!',
  },
  confirmationMessage: {
    id: `${scope}.confirmationMessage`,
    defaultMessage: 'Bạn có chắc chắn bạn muốn xóa?',
  },
  deleteSuccess: {
    id: `${scope}.deleteSuccess`,
    defaultMessage: 'Dữ liệu được xóa thành công!',
  },
  deleteError: {
    id: `${scope}.deleteError`,
    defaultMessage: 'Xóa dữ liệu không thành công, vui lòng thử lại sau giây lát!',
  },
  approveSuccess: {
    id: `${scope}.approveSuccess`,
    defaultMessage: 'Dữ liệu được duyệt thành công!',
  },
  approveError: {
    id: `${scope}.approveError`,
    defaultMessage: 'Duyệt không thành công, vui lòng thử lại sau giây lát!',
  },
  syncSuccess: {
    id: `${scope}.syncSuccess`,
    defaultMessage: 'Đồng bộ thành công!',
  },
  yesLabel: {
    id: `${scope}.yesLabel`,
    defaultMessage: 'Có',
  },
  noLabel: {
    id: `${scope}.noLabel`,
    defaultMessage: 'Không',
  },
  validateLabel: {
    id: `${scope}.validateLabel`,
    defaultMessage: 'Kiểm tra',
  },
  placeHolderBirthday:{
    id: `${scope}.placeHolderBirthday`,
    defaultMessage: 'Chọn/nhập ngày sinh',
  },
  descendSorting:{
    id: `${scope}.descendSorting`,
    defaultMessage: ''
  },
  ascendSorting:{
    id: `${scope}.ascendSorting`,
    defaultMessage: ''
  },
  noSorting:{
    id: `${scope}.noSorting`,
    defaultMessage: ''
  },
  minutes: {
    id: `${scope}.minutes`,
    defaultMessage: 'Phút'
  }
});
