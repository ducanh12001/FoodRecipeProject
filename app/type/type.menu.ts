import React from 'react';
import { Props } from 'react-intl/src/components/message';
import { RecipeType, ResponseDataType } from './type.recipe';

export type MenuInitialState = {
  isLoading: boolean,
  recipes: ResponseDataType,
  news: ResponseDataType,
  dinners: ResponseDataType,
  books: ResponseDataType,
  tools: ResponseDataType,
  id: string,
  recipeById: RecipeType,
  newById: object,
  toolById: object,
};
