import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { HomeSingle } from '../../type/type.home';
const selectHomePageDomain = (state: any) => state.homePage || initialState;

const makeContributorsSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.contributors,
  );

const makeIsLoadingSelector = () =>
  createSelector(
    selectHomePageDomain,
    (substate: HomeSingle) => substate.isLoading,
  );

export { makeIsLoadingSelector, makeContributorsSelector };
