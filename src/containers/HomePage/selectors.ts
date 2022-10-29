import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { HomeSingle } from '../../type/type.home';
const selectHomePageDomain = (state: any) => state.homePage || initialState;


const makeIsLoadingSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.isLoading,
  );

const makeFormMethodSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.formMethod,
  );

const makeRecipesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.recipes,
  );

const makeErrorSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.errors,
  );

const makeClearFormFieldSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.clearFormField,
  );

const makeInitialValuesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.initialValues,
  );

const makeFormValuesSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.formValues,
  );

export {
  makeIsLoadingSelector,
  makeFormMethodSelector,
  makeRecipesSelector,
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeClearFormFieldSelector,
  makeErrorSelector,
};
