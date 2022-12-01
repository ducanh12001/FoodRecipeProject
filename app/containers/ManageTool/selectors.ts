import { createSelector } from 'reselect';
import { initialState } from 'containers/ManageTool/reducer';
import { InitialStateType } from 'type/type.manage';

const selectToolsDomain = (state: any) => state.manageTool || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.id,
  );

const makeToolsSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.tools,
  );

const makeErrorSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectToolsDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectToolsDomain,
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
  makeToolsSelector,
};
