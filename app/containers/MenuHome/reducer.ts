/*
 *
 * Menu reducer
 *
 */
import produce from "immer";
import {
  ASYNC_END,
  ASYNC_START,
  ASSIGN_RECIPES,
  ASSIGN_NEWS,
  ASSIGN_DINNERS,
  ASSIGN_BOOKS,
  ASSIGN_TOOLS,
  SET_ID,
  ASSIGN_RECIPE_BY_ID,
} from './constants';

export const initialState = {
  isLoading: false,
  recipes: {
    data: []
  },
  news: {
    data: []
  },
  dinners: {
    data: []
  },
  books: {
    data: []
  },
  tools: {
    data: []
  },
  id: undefined,
  recipeById: {},
  newById: {},
  toolById: {}
};

const menuHomeReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_RECIPES:
      draft.recipes = action.recipes;
      draft.isLoading = false;
      break;
    case ASSIGN_NEWS:
      draft.news = action.news;
      draft.isLoading = false;
      break;
    case ASSIGN_DINNERS:
      draft.dinners = action.dinners;
      draft.isLoading = false;
      break;
    case ASSIGN_BOOKS:
      draft.books = action.books;
      draft.isLoading = false;
      break;
    case ASSIGN_TOOLS:
      draft.tools = action.tools;
      draft.isLoading = false;
      break;
    case ASSIGN_RECIPE_BY_ID:
      draft.recipeById = action.recipeById;
      draft.isLoading = false;
      break;
    case SET_ID:
      draft.id = action.id;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
  }
}, initialState);
export default menuHomeReducer;
