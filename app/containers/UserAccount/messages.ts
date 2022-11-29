/*
 * UserAccount Messages
 *
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.UserAccount';

export default defineMessages({
  helmetTitle: {
    id: `${scope}.helmetTitle`,
    defaultMessage: 'Edit Profile',
  },
  pageHeader: {
    id: `${scope}.pageHeader`,
    defaultMessage: 'Edit Profile',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  contactPlaceholder: {
    id: `${scope}.contactPlaceholder`,
    defaultMessage: 'Input your contact address',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Address',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Submit',
  },
  companyName: {
    id: `${scope}.companyName`,
    defaultMessage: 'Company name',
  },
  phoneNumber: {
    id: `${scope}.phoneNumber`,
    defaultMessage: 'Phone number',
  },
  addressPlaceholder: {
    id: `${scope}.addressPlaceholder`,
    defaultMessage: 'Input your address',
  },
  avatarLabel: {
    id: `${scope}.avatarLabel`,
    defaultMessage: 'Avatar',
  },
  editProfile: {
    id: `${scope}.editProfile`,
    defaultMessage: 'Edit Profile',
  },
  accountTab: {
    id: `${scope}.accountTab`,
    defaultMessage: 'Account Setting',
  },
  securityTab: {
    id: `${scope}.securityTab`,
    defaultMessage: 'Security Setting',
  },
  accountPassword: {
    id: `${scope}.accountPassword`,
    defaultMessage: 'Account Password',
  },
  accountPasswordDescription: {
    id: `${scope}.accountPasswordDescription`,
    defaultMessage: 'Change current password',
  },
  changeLabel: {
    id: `${scope}.changeLabel`,
    defaultMessage: 'Change',
  },
  oldPasswordLabel: {
    id: `${scope}.oldPasswordLabel`,
    defaultMessage: 'Old Password',
  },
  oldPasswordRequired: {
    id: `${scope}.oldPasswordRequired`,
    defaultMessage: 'Old Password must be provided!',
  },
  passwordChangeSuccess: {
    id: `${scope}.passwordChangeSuccess`,
    defaultMessage: 'Password changed successfully!',
  },
  profileUpdateSuccess: {
    id: `${scope}.profileUpdateSuccess`,
    defaultMessage: 'Profile updated successfully!',
  },
  loginActivity: {
    id: `${scope}.loginActivity`,
    defaultMessage: 'Login Activity',
  },
  clearToken: {
    id: `${scope}.clearToken`,
    defaultMessage: 'Are you sure you want remove session?',
  },
  sessionClearSuccess: {
    id: `${scope}.sessionClearSuccess`,
    defaultMessage: 'Session cleared successfully!',
  },
  osDetail: {
    id: `${scope}.osDetail`,
    defaultMessage: 'Operating System name: {os}, Version: {version}',
  },
  loadMoreLabel: {
    id: `${scope}.loadMoreLabel`,
    defaultMessage: 'Load More',
  },
  browserDetail: {
    id: `${scope}.browserDetail`,
    defaultMessage:
      'Logged in from browser: {browser} version: {version}. Login valid till: {ts, date, ::yyyyMMdd}',
  },
  onLabel: {
    id: `${scope}.onLabel`,
    defaultMessage: 'on',
  },
  clear: {
    id: `${scope}.clear`,
    defaultMessage: 'Clear',
  },
  upload: {
    id: `${scope}.upload`,
    defaultMessage: 'Upload',
  },
  offLabel: {
    id: `${scope}.offLabel`,
    defaultMessage: 'off',
  },
  toggleTwoFaSuccess: {
    id: `${scope}.toggleTwoFaSuccess`,
    defaultMessage: 'Two factor authentication setting updated successfully!',
  },
  genderMale:{
    id: `${scope}.genderMale`,
    defaultMessage: 'Nam',
  },
  genderFemale:{
    id: `${scope}.genderFemale`,
    defaultMessage: 'Nữ',
  },
  positionCEO:{
    id: `${scope}.positionCEO`,
    defaultMessage: 'Chủ doanh nghiệp',
  }, positionManagement:{
    id: `${scope}.positionManagement`,
    defaultMessage: 'Quản lý',
  }, positionStaff:{
    id: `${scope}.positionStaff`,
    defaultMessage: 'Nhân viên',
  },
  notValidTypeError:{
    id: `${scope}.notValidTypeError`,
    defaultMessage: 'is not a valid file type!',
  },
  sizeTooBigError:{
    id: `${scope}.sizeTooBigError`,
    defaultMessage: 'Avatar cannot be greater than 2mb',
  },
});
