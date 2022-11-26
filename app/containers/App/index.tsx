/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import RenderRouter from 'routes';
import { getProfileAction, isLoggedErrorAction } from 'containers/App/actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from 'containers/App/reducer';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/App/saga';
import { ConfigProvider, Layout } from 'antd';
import 'containers/App/index.less';
import GlobalStyle from 'global-styles';
import SnackMessage from 'containers/SnackMessage';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocaleValue } from 'containers/LanguageProvider/selectors';
import { makeLoggedInUserSelector, makeRedirectRouteSelector } from './selectors';

const key = 'global';
const stateSelector = createStructuredSelector({
  localeValue: makeSelectLocaleValue(),
  redirectRoute: makeRedirectRouteSelector(),
  user: makeLoggedInUserSelector(),
});
export default function App() {
  const dispatch = useDispatch();
  const { localeValue, user } = useSelector(stateSelector);
  const getLoggedInUserProfile = () => dispatch(getProfileAction());
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    if (!user) {
      getLoggedInUserProfile();
    }
  }, []);

  return (
    <>
      <Helmet titleTemplate="%s - Food Recipe" defaultTitle="Food Recipe">
        <meta name="description" content="Food Recipe" />
      </Helmet>
      <GlobalStyle />
      <SnackMessage />
      <Layout className="mh-100">
        <BrowserRouter>
          <ConfigProvider locale={localeValue}>
            <RenderRouter />
          </ConfigProvider>
        </BrowserRouter>
      </Layout>
    </>
  );
}
