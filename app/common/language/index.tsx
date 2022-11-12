import React from 'react';
import EnSvg from 'assets/i18n/en.svg'
import ViSvg from 'assets/i18n/vi.svg';
import viVN from 'antd/es/locale/vi_VN';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/vi';
import { Locale } from 'antd/lib/locale-provider';
moment.locale('en');

interface AppLocales {
  label: string;
  flag: any;
  value: Locale;
}

export const appLocales: AppLocales[] = [
  { label: 'en', flag: <img alt="en" src={EnSvg} />, value: viVN },
  { label: 'vi', flag: <img alt="vi" src={ViSvg} />, value: enUS },
];
