/*
 *
 * Recipe Management actions
 *
 */

import { FormListFieldData, Rule } from 'antd/es/form';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_RECIPES,
  ASYNC_END,
  ASYNC_START,
  CLEAR_FORM,
  CLEAR_FORM_FIELD,
  DELETE_ITEM_BY_ID,
  GET_RECIPE_BY_ID,
  GET_RECIPE_DETAIL_BY_ID,
  QUERY_RECIPES,
  SET_FORM_METHOD,
  SET_FORM_VALUES,
  SET_ID,
  SET_INITIAL_TABLE_PARAMS,
  SET_INITIAL_VALUES,
  SET_PAGE_NUMBER,
  SET_PAGE_SIZE,
  SET_RECIPE_DETAIL,
  SET_STATUS,
  SET_TABLE_PARAMS,
  SUBMIT_FORM,
} from './constants';

import { GenericItemsType } from 'type/type.genericItem';
import { TableParams } from 'type/type.table';

export function enterValidationErrorAction(errors: []) {
  return {
    type: ADD_VALIDATION_ERROR,
    errors,
  };
}

export function queryRecipesAction() {
  return {
    type: QUERY_RECIPES,
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

export function clearFormAction() {
  return {
    type: CLEAR_FORM,
  };
}

export function getRecipeByIdAction(id: string) {
  return {
    type: GET_RECIPE_BY_ID,
    id
  };
}

export function getRecipeDetailByIdAction(id: string) {
  return {
    type: GET_RECIPE_DETAIL_BY_ID,
    id,
  };
}

export function submitFormAction() {
  return {
    type: SUBMIT_FORM,
  };
}

export function clearFormFieldAction() {
  return {
    type: CLEAR_FORM_FIELD,
  };
}

export function deleteItemByIdAction(id: string) {
  return {
    type: DELETE_ITEM_BY_ID,
    id,
  };
}

export function assignRecipesAction(recipes : object) {
  return {
    type: ASSIGN_RECIPES,
    recipes,
  };
}

export function setPageNumberAction(pageNumber: number) {
  return {
    type: SET_PAGE_NUMBER,
    pageNumber,
  };
}

export function setPageSizeAction(pageSize: number) {
  return {
    type: SET_PAGE_SIZE,
    pageSize,
  };
}

export function setFormMethodAction(method: string) {
  return {
    type: SET_FORM_METHOD,
    method,
  };
}

export function setIdAction(id: string) {
  return {
    type: SET_ID,
    id,
  };
}

export function setFormValues(formValues: object) {
  return {
    type: SET_FORM_VALUES,
    formValues,
  };
}

export function setInitialValuesAction(initialValues: object) {
  return {
    type: SET_INITIAL_VALUES,
    initialValues,
  };
}

export function setRecipeDetailAction(recipe: object) {
  return {
    type: SET_RECIPE_DETAIL,
    recipe,
  };
}

export function setTableParams(params: TableParams) {
  return {
    type: SET_TABLE_PARAMS,
    params
  };
}

export function setInitialTableParams() {
  return {
    type: SET_INITIAL_TABLE_PARAMS
  };
}

export function setStatusAction(status:number | undefined) {
  return {
    type: SET_STATUS,
    status,
  };
}