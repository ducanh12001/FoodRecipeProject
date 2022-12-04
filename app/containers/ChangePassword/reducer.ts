/*
 *
 * ChangePassword reducer
 *
 */
import produce from 'immer';
import {
  ADD_VALIDATION_ERROR,
  ASYNC_END,
  ASYNC_START,
  SET_FORM_VALUES,
  CLEAR_FORM_VALUES,
} from 'containers/ChangePassword/constants';

export const initialState = {
  code: '',
  initialValues: {
    oldPass: '',
    newPass: '',
  },
  formValues: {},
  isLoading: false,
  errors: {},
  clearFormValue: false,
};

/* eslint-disable default-case, no-param-reassign */
const changePasswordReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      draft.formValues = action.formValues;
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
    case CLEAR_FORM_VALUES:
      draft.clearFormValue = action.clearFormValue;
      break;
  }
}, initialState);

export default changePasswordReducer;
