/*
 *
 * Home reducer
 *
 */
import produce from "immer";
import {
  ASYNC_END,
  ASYNC_START,
  ASSIGN_RECIPES,
  ASSIGN_NEWS,
  CLEAR_FORM_FIELD,
  SET_INITIAL_VALUES,
  SET_FORM_VALUES,
  SET_FORM_METHOD,
  CLEAR_FORM,
} from 'containers/RecipeHome/constants';
import { HomeInitialState } from "type/type.home";

export const initialState:HomeInitialState = {
  pageSize: 12,
  pageNumber: 1,
  isLoading: false,
  formMethod: undefined,
  errors: [],
  initialValues: {},
  formValues: {},
  clearFormField: false,
  recipes: {
    data: []
  },
  news: {},
};

const recipeHomeReducer = produce((draft, action) => {
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
export default recipeHomeReducer;
