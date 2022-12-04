import { createSelector } from 'reselect';
import { initialState } from 'containers/ChangePassword/reducer';
import { InitialStateType } from 'type/type.ChangePassword';

const selectChangePasswordDomain = (state: any) =>
  state.changePassword || initialState;

const makeNewPasswordSelector = () =>
  createSelector(selectChangePasswordDomain, (substate: InitialStateType) => substate.initialValues.newPass);
const makeConfirmPasswordSelector = () =>
  createSelector(
    selectChangePasswordDomain,
    (substate: InitialStateType) => substate.initialValues.oldPass,
  );

const makeIsLoadingSelector = () =>
  createSelector(selectChangePasswordDomain, (substate: InitialStateType) => substate.isLoading);

const makeErrorsSelector = () =>
  createSelector(selectChangePasswordDomain, (substate: InitialStateType) => substate.errors);

const makeFormValuesSelector = () =>
  createSelector(selectChangePasswordDomain, (substate: InitialStateType) => substate.formValues);

const makeInitialValuesSelector = () =>
  createSelector(
    selectChangePasswordDomain,
    (substate) => substate.initialValues,
  );

const makeClearFormValueSelector = () =>
  createSelector(
    selectChangePasswordDomain,
    (substate) => substate.clearFormValue,
  );

export {
  makeClearFormValueSelector,
  makeFormValuesSelector,
  makeInitialValuesSelector,
  makeIsLoadingSelector,
  makeNewPasswordSelector,
  makeConfirmPasswordSelector,
  makeErrorsSelector,
};
