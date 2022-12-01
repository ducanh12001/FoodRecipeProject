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

export type MenuSingle = {
  name: any;
  icon: React.ReactNode;
  key: string;
  path?: string;
  method?: string;
  resource: string;
  defaultPermission: boolean;
  children?: SubMenu[];
};
export type SubMenu = {
  name: any;
  icon: React.ReactNode;
  key: string;
  path: string;
  method: string;
  resource: string;
  defaultPermission: boolean;
};
