import { createSelector } from 'reselect';
import { initialState, initLocale } from './reducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: any) => state.language || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(selectLanguage, (languageState:initLocale) => languageState.locale);

const makeSelectLocaleValue = () =>
  createSelector(selectLanguage, (languageState:initLocale) => languageState.localeValue);

export { selectLanguage, makeSelectLocale, makeSelectLocaleValue };
