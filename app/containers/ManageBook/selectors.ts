import { createSelector } from 'reselect';
import { initialState } from 'containers/ManageBook/reducer';
import { InitialStateType } from 'type/type.manage';

const selectBooksDomain = (state: any) => state.manageBook || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.id,
  );

const makeBooksSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.books,
  );

const makeErrorSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectBooksDomain,
    (substate: InitialStateType) => substate.formValues,
  );

export {
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeClearFormFieldSelector,
  makeIdSelector,
  makeFormMethodSelector,
  makeIsLoadingSelector,
  makeErrorSelector,
  makeBooksSelector,
};
