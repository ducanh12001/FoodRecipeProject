/*
 *
 * Manage reducer
 *
 */
import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASSIGN_BOOKS,
  ASYNC_END,
  ASYNC_START,
  CLEAR_FORM,
  CLEAR_FORM_FIELD,
  SET_FORM_METHOD,
  SET_FORM_VALUES,
  SET_ID,
  SET_INITIAL_VALUES
} from './constants';

export const initialState = {
  initialValues: {},
  formValues: {},
  errors: [],
  isLoading: false,
  error: '',
  clearFormField: false,
  formMethod: undefined,
  books: {
    data: []
  },
  id: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const BooksReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_BOOKS:
      draft.books = action.books;
      draft.isLoading = false;
      break;
    case SET_ID:
      draft.id = action.id;
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
    case ADD_VALIDATION_ERROR:
      draft.errors = action.errors;
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
      draft.id = undefined;
      break;
  }
}, initialState);

export default BooksReducer;
