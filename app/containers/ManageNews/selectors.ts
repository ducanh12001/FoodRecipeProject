import { createSelector } from 'reselect';
import { initialState } from 'containers/ManageNews/reducer';
import { InitialStateType } from 'type/type.manage';

const selectNewsDomain = (state: any) => state.manageNews || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.id,
  );

const makeNewsSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.news,
  );

const makeErrorSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectNewsDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectNewsDomain,
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
  makeNewsSelector,
};
