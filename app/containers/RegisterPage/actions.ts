/*
 *
 * RegisterPage actions
 *
 */

import { FormListFieldData } from 'antd/es/form';
import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  REGISTER_PROCESS,
  REGISTER_SUCCESS,
  SET_FORM_VALUES,
  CLEAR_FORM_VALUES,
  SEND_CODE_REGISTER,
} from 'containers/RegisterPage/constants';

export function setFormValuesAction(formValues: object) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}

export function clearFormAction(clearFormValue: boolean) {
  return {
    type: CLEAR_FORM_VALUES,
    clearFormValue,
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

export function enterValidationErrorAction(errors: FormListFieldData[]) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function enterRegisterAction() {
  return {
    type: REGISTER_PROCESS,
  };
}

export function registerSuccessAction() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function sendCodeRegisterAction(code: string) {
  return {
    type: SEND_CODE_REGISTER,
    code
  }
}
