import { createSelector } from 'reselect';
import { initialState } from 'containers/ManageDinner/reducer';
import { InitialStateType } from 'type/type.manage';

const selectDinnersDomain = (state: any) => state.manageDinner || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.id,
  );

const makeDinnersSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.dinners,
  );

const makeErrorSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectDinnersDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectDinnersDomain,
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
  makeDinnersSelector,
};
