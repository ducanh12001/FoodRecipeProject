import React from 'react';
import { Props } from 'react-intl/src/components/message';

export type MenuInitialState = {
  isLoading: boolean,
  recipes: ResponseType,
  news: ResponseType,
  dinners: ResponseType,
  books: ResponseType,
  tools: ResponseType,
};
