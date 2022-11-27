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
  photoLabel: {
    id: `${scope}.photoLabel`,
    defaultMessage: 'Photo'
  },
  descriptionLabel: {
    id: `${scope}.descriptionLabel`,
    defaultMessage: 'Description'
  },
  ingredientLabel: {
    id: `${scope}.ingredientLabel`,
    defaultMessage: 'Ingredient'
  },
  ingredientPlaceholder: {
    id: `${scope}.ingredientPlaceholder`,
    defaultMessage: 'E.G: 1 carrot'
  },
  addIngredientBtn: {
    id: `${scope}.addIngredientBtn`,
    defaultMessage: 'Add Ingredient'
  },
  directionLabel: {
    id: `${scope}.directionLabel`,
    defaultMessage: 'Direction'
  },
  step: {
    id: `${scope}.step`,
    defaultMessage: 'Step'
  },
  directionPlaceholder: {
    id: `${scope}.directionPlaceholder`,
    defaultMessage: 'Direction'
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
  },
  cancelBtn: {
    id: `${scope}.cancelBtn`,
    defaultMessage: 'Cancel'
  },
  moreFrom: {
    id: `${scope}.moreFrom`,
    defaultMessage: 'More From'
  },
  mealCooking: {
    id: `${scope}.mealCooking`,
    defaultMessage: 'Meals & Cooking'
  },
  createRecipe: {
    id: `${scope}.createRecipe`,
    defaultMessage: 'Create a Recipe'
  },
  picture: {
    id: `${scope}.picture`,
    defaultMessage: 'Picture'
  },
  require: {
    id: `${scope}.require`,
    defaultMessage: 'Require'
  },
  inputIngredient: {
    id: `${scope}.inputIngredient`,
    defaultMessage: 'Please input ingredient or delete this field.'
  },
  inputDirection: {
    id: `${scope}.inputIngredient`,
    defaultMessage: 'Please input direction or delete this field.'
  }
});