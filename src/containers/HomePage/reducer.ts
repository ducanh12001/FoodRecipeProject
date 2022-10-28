import produce from 'immer';
import { HomeSingle } from '../../type/type.home';
import {
  ASYNC_START,
  ASYNC_END,
  ASSIGN_RECIPES,
  ASSIGN_NEWS,
  CLEAR_FORM_FIELD,
  SET_INITIAL_VALUES,
  SET_FORM_VALUES,
  SET_FORM_METHOD,
  CLEAR_FORM,
} from './constants';

export const initialState: HomeSingle = {
  isLoading: false,
  errors: [],
  initialValues: {},
  formValues: {},
  clearFormField: false,
  recipes: {},
  news: {},
  formMethod: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_RECIPES:
      draft.recipes = action.recipes;
      draft.isLoading = false;
      break;
    case ASSIGN_NEWS:
      draft.news = action.news;
      draft.isLoading = false;
      break;
    case CLEAR_FORM_FIELD:
      draft.clearFormField = true;
      break;
    case SET_INITIAL_VALUES:
      draft.initialValues = action.initialValues;
      break;
    case SET_FORM_VALUES:
      draft.formValues = action.formValues;
      break;
    case SET_FORM_METHOD:
      draft.formMethod = action.method;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case CLEAR_FORM:
      draft.errors = [];
      draft.formValues = {};
      draft.initialValues = {};
      draft.clearFormField = false;
      draft.isLoading = false;
      draft.formMethod = undefined;
      break;
  }
}, initialState);

export default homePageReducer;
