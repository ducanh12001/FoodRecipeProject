import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { InitialStateType } from '../../type/type.RegisterPage';

const selectRegisterPageDomain = (state: any) => state.register || initialState;

const makeInitialValuesSelector = () =>
  createSelector(
    selectRegisterPageDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(selectRegisterPageDomain, (substate: InitialStateType) => substate.formValues);

const makeErrorSelector = () =>
  createSelector(selectRegisterPageDomain, (substate: InitialStateType) => substate.errors);

const makeIsLoadingSelector = () =>
  createSelector(selectRegisterPageDomain, (substate: InitialStateType) => substate.isLoading);

const makeClearFormValueSelector = () =>
  createSelector(
    selectRegisterPageDomain,
    (substate) => substate.clearFormValue,
  );

export {
  makeClearFormValueSelector,
  makeFormValuesSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
  makeInitialValuesSelector,
};
