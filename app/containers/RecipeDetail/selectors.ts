import { createSelector } from 'reselect';
import { initialState } from 'containers/RecipeHome/reducer';
import { InitialStateType } from 'type/type.MarketStore';

const selectRecipeDetail = (state: any) => state.recipeDetail || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectRecipeDetail,
    (substate: InitialStateType) => substate.isLoading,
  );



export {
  makeIsLoadingSelector,
};