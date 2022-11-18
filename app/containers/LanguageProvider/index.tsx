/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider, IntlShape } from 'react-intl';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';

const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));
interface LanguageProviderProps {
  messages: any;
  children: React.ReactNode;
}
export default function LanguageProvider(props: LanguageProviderProps) {
  const { locale } = useSelector(stateSelector);

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={props.messages[locale]}
    >
      {props.children}
    </IntlProvider>
  );
}

// LanguageProvider.propTypes = {
//   messages: PropTypes.object,
//   children: PropTypes.element.isRequired,
// };
