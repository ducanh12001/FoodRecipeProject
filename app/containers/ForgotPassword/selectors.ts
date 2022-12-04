import { createSelector } from 'reselect';
import { initialState } from 'containers/ForgotPassword/reducer';
import { ForgotPassword } from 'type/type.forgotPass';
const selectForgotPasswordPageDomain = (state: any) =>
  state.forgotPassword || initialState;

const makeFormValuesSelector = () =>
  createSelector(
    selectForgotPasswordPageDomain,
    (substate: ForgotPassword) => substate.formValues.email,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectForgotPasswordPageDomain,
    (substate: ForgotPassword) => substate.initialValues,
  );

const makeErrorsSelector = () =>
  createSelector(
    selectForgotPasswordPageDomain,
    (substate: ForgotPassword) => substate.errors,
  );

const makeIsLoadingSelector = () =>
  createSelector(
    selectForgotPasswordPageDomain,
    (substate: ForgotPassword) => substate.isLoading,
  );

export {
  makeFormValuesSelector,
  makeErrorsSelector,
  makeIsLoadingSelector,
  makeInitialValuesSelector,
};
