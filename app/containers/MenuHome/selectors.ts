import { createSelector } from 'reselect';
import { initialState } from 'containers/MenuHome/reducer';
import { MenuInitialState } from 'type/type.menu';

const selectMenuHome = (state: any) => state.menuHome || initialState;

const makeIsLoadingSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.isLoading,
  );

const makeIdSelector = () =>
  createSelector(selectMenuHome, (substate: MenuInitialState) => substate.id);


const makeRecipesSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.recipes,
  );

const makeNewsSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.news,
  );

const makeDinnersSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.dinners,
  );

const makeBooksSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.books,
  );

const makeToolsSelector = () =>
  createSelector(
    selectMenuHome,
    (substate: MenuInitialState) => substate.tools,
  );

const makeRecipeByIdSelector = () =>
  createSelector(selectMenuHome, (substate: MenuInitialState) => substate.recipeById);

const makeNewByIdSelector = () =>
  createSelector(selectMenuHome, (substate: MenuInitialState) => substate.newById);

const makeToolByIdSelector = () =>
  createSelector(selectMenuHome, (substate: MenuInitialState) => substate.toolById);


export {
  makeIsLoadingSelector,
  makeRecipesSelector,
  makeNewsSelector,
  makeDinnersSelector,
  makeBooksSelector,
  makeToolsSelector,
  makeIdSelector,
  makeRecipeByIdSelector,
  makeNewByIdSelector,
  makeToolByIdSelector
};