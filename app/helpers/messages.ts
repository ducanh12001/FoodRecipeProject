/*
 * Validation Messages
 *
 */

import { defineMessages } from 'react-intl';

export const scope = 'helpers.ValidationMessage';

export default defineMessages({
  confirmPasswordNotSimilar: {
    id: `${scope}.confirmPasswordNotSimilar`,
    defaultMessage: `Confirm password doesn't match with password!`,
  },
  isNotEmpty: {
    id: `${scope}.isNotEmpty`,
    defaultMessage: `This field is required!`,
  },
  'Email already taken': {
    id: `${scope}.emailTaken`,
    defaultMessage: `Email already taken!`,
  },
  isNotString: {
    id: `${scope}.isString`,
    defaultMessage: `This field must be string!`,
  },
  isNotInt: {
    id: `${scope}.isNotInt`,
    defaultMessage: `This field is not a valid number!`,
  },
  isNotEmail: {
    id: `${scope}.isNotEmail`,
    defaultMessage: `This field is not valid email!`,
  },
  isNotSelected: {
    id: `${scope}.isNotSelected`,
    defaultMessage: `This field is must be selected!`,
  },
  isNotPositive: {
    id: `${scope}.isNotPositive`,
    defaultMessage: `This field is must be accepted!`,
  },
  isNotTrue: {
    id: `${scope}.isNotTrue`,
    defaultMessage: `This field must be accepted!`,
  },
  isNotLowerCase: {
    id: `${scope}.isNotLowerCase`,
    defaultMessage: `This field must be in lowercase!`,
  },
  isNotUpperCase: {
    id: `${scope}.isNotUpperCase`,
    defaultMessage: `This field must be in uppercase!`,
  },
  isNotStrongPassword: {
    id: `${scope}.isNotStrongPassword`,
    defaultMessage: `Mật khẩu phải chứa ít nhất 1 chữ in hoa, 1 chữ thường, 1 ký tự đặc biệt, 1 chữ số, tối thiểu là 6 ký tự và tối đa là 20 ký tự.`,
  },
  'already taken': {
    id: `${scope}.alreadyTaken`,
    defaultMessage: `Field already taken!`,
  },
  'should be array of numbers': {
    id: `${scope}.numberArrayExpected`,
    defaultMessage: `Field should be array of numbers!`,
  },
});
