/*
 * RecipeList Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.RecipeList';

export default defineMessages({
  description: {
    id: `${scope}.decription`,
    defaultMessage: 'Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.',
  },
  recipes: {
    id: `${scope}.recipes`,
    defaultMessage: 'Recipes',
  },
  rating: {
    id: `${scope}.rating`,
    defaultMessage: 'ratings',
  },
});
