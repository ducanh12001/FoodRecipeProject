import produce from "immer";
import {
  ASYNC_END,
  ASYNC_START,
} from 'containers/RecipeDetail/constants';

const EmptyFormField = {
  name: '',
  description: '',
};

export const initialState = {
  isLoading: false,
};

const recipeDetailReducer = produce((draft, action) => {
  switch (action.type) {
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
  }
}, initialState);

export default recipeDetailReducer;
