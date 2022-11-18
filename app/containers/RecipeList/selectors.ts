import { createSelector } from 'reselect';
import { initialState } from 'containers/RecipeHome/reducer';
import { HomeInitialState } from 'type/type.home';

const selectRecipeList = (state: any) => state.recipeList || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectRecipeList,
    (substate: HomeInitialState) => substate.isLoading,
  );

const makeRecipesSelector = () =>
  createSelector(
    selectRecipeList,
    (substate: HomeInitialState) => substate.recipes,
  );


export {
  makeIsLoadingSelector,
  makeRecipesSelector
}