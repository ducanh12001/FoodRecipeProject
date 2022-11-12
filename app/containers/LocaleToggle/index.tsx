/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Dropdown, Menu } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { changeLocaleAction, changeLocaleValueAction } from 'containers/LanguageProvider/actions';
import { useCookie } from 'hooks/useCookie';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { appLocales } from 'common/language';

const stateSelector = createStructuredSelector({
  locale: makeSelectLocale(),
});

export function LocaleToggle() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [cookie, updateCookie] = useCookie('lang', 'en');
  const { locale } = useSelector(stateSelector);

  const selectLocale = ({key}) => {
    dispatch(changeLocaleAction(key));
    const localeValue = appLocales.filter((lang:any) => lang.label !== key)
    dispatch(changeLocaleValueAction(localeValue[0].value));
    // @ts-ignore
    updateCookie(key, 10);
  };

  return (
    <Dropdown
      trigger={['click']}
      placement="bottom"
      overlay={
        <Menu onClick={selectLocale}>
          {appLocales.map((lang) => (
            <Menu.Item
              style={{ textAlign: 'left' }}
              disabled={locale === lang.label}
              key={lang.label}
            >
              {lang.flag} {lang.label}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <span>
        <TranslationOutlined />
      </span>
    </Dropdown>
  );
}

export default LocaleToggle;
