import produce from "immer";
import {
  ASSIGN_RECIPES,
  ASYNC_END,
  ASYNC_START,
} from './constants';

export const initialState = {
  isLoading: false,
  recipes: {
    data: []
  },
};

const recipeListReducer = produce((draft, action) => {
  switch (action.type) {
    case ASSIGN_RECIPES:
      draft.recipes = action.recipes;
      draft.isLoading = false;
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
  }
}, initialState);
export default recipeListReducer;
