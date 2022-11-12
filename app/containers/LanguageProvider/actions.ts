/*
 *
 * LanguageProvider actions
 *
 */

import { Locale } from 'antd/lib/locale-provider';
import { CHANGE_LOCALE, CHANGE_LOCALE_VALUE } from './constants';

/**
 * Change the language on the client side,
 *
 * @param  {string} languageLocale The language locale
 *
 * @return {object} An action object with a type of CHANGE_LOCALE
 */
export function changeLocaleAction(languageLocale: string) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function changeLocaleValueAction(languageLocale: Locale) {
  return {
    type: CHANGE_LOCALE_VALUE,
    localeValue: languageLocale,
  };
}
