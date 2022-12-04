import { createSelector } from 'reselect';
import { initialState } from 'containers/ManageRecipe/reducer';
import { InitialStateType } from 'type/type.manage';

const selectRecipesDomain = (state: any) => state.manageRecipe || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.formMethod,
  );

const makeIdSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.id,
  );

const makeRecipesSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.recipes,
  );

const makeErrorSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectRecipesDomain,
    (substate: InitialStateType) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectRecipesDomain,
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
  makeRecipesSelector,
};
