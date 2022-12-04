import { createSelector } from 'reselect';
import { initialState } from 'containers/ResetPassword/reducer';
import { InitialStateType } from 'type/type.ResetPassword';

const selectResetPasswordDomain = (state: any) =>
  state.resetPassword || initialState;

const makePasswordSelector = () =>
  createSelector(selectResetPasswordDomain, (substate: InitialStateType) => substate.initialValues.password);
const makeConfirmPasswordSelector = () =>
  createSelector(
    selectResetPasswordDomain,
    (substate: InitialStateType) => substate.initialValues.oldPassword,
  );

const makeIsLoadingSelector = () =>
  createSelector(selectResetPasswordDomain, (substate: InitialStateType) => substate.isLoading);

const makeErrorsSelector = () =>
  createSelector(selectResetPasswordDomain, (substate: InitialStateType) => substate.errors);

const makeCodeSelector = () =>
  createSelector(selectResetPasswordDomain, (substate: InitialStateType) => substate.code);

const makeFormValuesSelector = () =>
  createSelector(selectResetPasswordDomain, (substate: InitialStateType) => substate.formValues);

const makeInitialValuesSelector = () =>
  createSelector(
    selectResetPasswordDomain,
    (substate) => substate.initialValues,
  );

const makeClearFormValueSelector = () =>
  createSelector(
    selectResetPasswordDomain,
    (substate) => substate.clearFormValue,
  );

export {
  makeClearFormValueSelector,
  makeFormValuesSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
  makeCodeSelector,
  makePasswordSelector,
  makeConfirmPasswordSelector,
  makeErrorsSelector,
};
