/*
 *
 * UserAccount actions
 *
 */

import { FormListFieldData } from 'antd/es/form';
import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  CLEAR_FORM,
  INITIATE_CLEAN,
  SET_FORM_VALUES,
  SET_INITIAL_VALUES,
  SUBMIT_FORM,
  SUBMIT_CHANGE_PASSWORD_FORM,
  DISABLE_TOKEN,
  UPDATE_TWO_FA_STATUS,
  SET_LIMIT,
  SET_PAGE_SIZE,
  SUBMIT_AVATAR_FORM,
} from 'containers/UserAccount/constants';
import { EmptyFormFieldType } from 'type/type.UserAccount';

/**
 * Check user is logged, this action starts the request saga
 *
 * @return {object} An action object with a type of IS_LOGGED
 */

export function enterValidationErrorAction(errors: FormListFieldData[]) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
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

export function updateTwoFaStatusAction() {
  return {
    type: UPDATE_TWO_FA_STATUS,
  };
}

export function setLimitAction(limit: number) {
  return {
    type: SET_LIMIT,
    limit,
  };
}

export function setPageSizeAction(pageSize: number) {
  return {
    type: SET_PAGE_SIZE,
    pageSize,
  };
}

export function initiateCleanAction() {
  return {
    type: INITIATE_CLEAN,
  };
}

export function disableTokenAction(id: any) {
  return {
    type: DISABLE_TOKEN,
    id,
  };
}

export function clearFormAction() {
  return {
    type: CLEAR_FORM,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function submitAvatarFormAction() {
  return {
    type: SUBMIT_AVATAR_FORM,
  };
}

export function submitChangePasswordFormAction() {
  return {
    type: SUBMIT_CHANGE_PASSWORD_FORM,
  };
}

export function setFormValues(formValues: object) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}

export function setInitialValuesAction(initialValues: EmptyFormFieldType) {
  return {
    type: SET_INITIAL_VALUES,
    initialValues,
  };
}
