import { createSelector } from 'reselect';
import { initialState } from 'containers/RecipeHome/reducer';
import { HomeInitialState } from 'type/type.home';

const selectHomePageDomain = (state: any) => state.recipeHome || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.isLoading,
  );

const makePageNumberSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.pageNumber,
  );

const makePageSizeSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.pageSize,
  );

  const makeFormMethodSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.formMethod,
  );

const makeRecipesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.recipes,
  );

const makeErrorSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeInitialState) => substate.formValues,
  );

export {
  makePageNumberSelector,
  makeIsLoadingSelector,
  makePageSizeSelector,
  makeFormMethodSelector,
  makeRecipesSelector,
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeClearFormFieldSelector,
  makeErrorSelector,
};