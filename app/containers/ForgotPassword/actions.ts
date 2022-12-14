/*
 *
 * ForgotPasswordPage actions
 *
 */

import { FormListFieldData } from 'antd/es/form';
import {
  ADD_VALIDATION_ERROR,
  FORGOT_PASSWORD,
  SET_FORM_VALUES,
  ASYNC_START,
  ASYNC_END,
} from 'containers/ForgotPassword/constants';

export function forgotPasswordAction() {
  return {
    type: FORGOT_PASSWORD,
  };
}

export function enterValidationErrorAction(errors: FormListFieldData[]) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function setFormValuesAction(formValues: object) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}

export function asyncStartAction() {
  return {
    type: ASYNC_START,
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}
