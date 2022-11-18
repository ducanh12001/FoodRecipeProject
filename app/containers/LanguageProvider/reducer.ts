/*
 *
 * LanguageProvider reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';
import { DEFAULT_LOCALE } from 'i18n';
import { CHANGE_LOCALE, CHANGE_LOCALE_VALUE } from 'containers/LanguageProvider/constants';
import { Locale } from 'antd/lib/locale-provider';
import enUS from 'antd/es/locale/en_US';

export interface initLocale {
  locale: string;
  localeValue: Locale;
}
export const initialState: initLocale = {
  locale: DEFAULT_LOCALE,
  localeValue: enUS
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      draft.locale = action.locale;
      break;
    case CHANGE_LOCALE_VALUE:
      draft.localeValue = action.localeValue;
      break;
    default:
  }
}, initialState);

export default languageProviderReducer;
