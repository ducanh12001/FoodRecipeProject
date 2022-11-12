import { createSelector } from 'reselect';
import { initialState } from 'containers/UserAccount/reducer';
import { InitialStateType } from 'type/type.UserAccount';

const selectUserAccount = (state: any) => state.userAccount || initialState;

const makeInitialValuesSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.initialValues);

const makeFormValuesSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.formValues);

const makeIsLoadingSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.isLoading);

const makeErrorSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.errors);

const makeInitiateCleanFieldSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.initiateClean);

const makePageSizeSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.pageSize);

const makeLimitSelector = () =>
  createSelector(selectUserAccount, (substate: InitialStateType) => substate.limit);

export {
  makePageSizeSelector,
  makeLimitSelector,
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeIsLoadingSelector,
  makeErrorSelector,
  makeInitiateCleanFieldSelector,
};
