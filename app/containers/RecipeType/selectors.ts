import { createSelector } from 'reselect';
import { initialState } from 'containers/RecipeHome/reducer';
import { InitialStateType } from 'type/type.MarketStore';

const selectRecipeType = (state: any) => state.recipeType || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectRecipeType,
    (substate: InitialStateType) => substate.isLoading,
  );

export {
  makeIsLoadingSelector,
};