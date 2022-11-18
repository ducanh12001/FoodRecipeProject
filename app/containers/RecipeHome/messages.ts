import { defineMessages } from 'react-intl';

export const scope = 'containers.RecipeHome';

export default defineMessages({
  recipeTitle: {
    id: `${scope}.recipeTitle`,
    defaultMessage: 'Recipe Title',
  },
  recipeNamePlaceholder: {
    id: `${scope}.recipeNamePlaceholder`,
    defaultMessage: 'Give your recipe a title'
  },
  descriptionLabel: {
    id: `${scope}.descriptionLabel`,
    defaultMessage: 'Description'
  },
  yieldLabel: {
    id: `${scope}.yieldLabel`,
    defaultMessage: 'Yields'
  },
  prepTimeLabel: {
    id: `${scope}.prepTimeLabel`,
    defaultMessage: 'Prep Time'
  },
  cookTimeLabel: {
    id: `${scope}.cookTimeLabel`,
    defaultMessage: 'Cook Time'
  },
  noteLabel: {
    id: `${scope}.noteLabel`,
    defaultMessage: 'Note (optional)'
  },
  submitBtn: {
    id: `${scope}.submitBtn`,
    defaultMessage: 'Submit'
  }
});