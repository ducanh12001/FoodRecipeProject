/*
 *
 * ChangePassword actions
 *
 */

import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  CHANGE_PASSWORD,
  SET_FORM_VALUES,
  CLEAR_FORM_VALUES,
} from 'containers/ChangePassword/constants';
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

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}

export function changePasswordAction() {
  return {
    type: CHANGE_PASSWORD,
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
