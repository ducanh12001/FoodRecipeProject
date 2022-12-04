/*
 *
 * ResetPassword actions
 *
 */

import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  RESET_PASSWORD,
  SET_FORM_VALUES,
  SET_RESET_CODE,
  CLEAR_FORM_VALUES,
} from 'containers/ResetPassword/constants';
import { FieldData } from "rc-field-form/lib/interface";

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

export function setResetCodeAction(code: any) {
  return {
    type: SET_RESET_CODE,
    code,
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}

export function resetPasswordAction() {
  return {
    type: RESET_PASSWORD,
  };
}

export function enterValidationErrorAction(errors: FieldData[]) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function clearFormAction(clearFormValue: boolean) {
  return {
    type: CLEAR_FORM_VALUES,
    clearFormValue,
  };
}
