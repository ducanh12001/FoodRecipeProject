/**
 *
 * Public Route
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeIsLoggedSelector,
  makeRedirectRouteSelector,
} from 'containers/App/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import Common from 'utils/common';
import { SUCCESS_REDIRECT } from 'containers/LoginPage/constants';
import PropTypes from 'prop-types';
import { clearRedirectAction } from 'containers/App/actions';
import { makeAlertMessageSelector } from 'containers/AlertMessage/selectors';
import { makeSnackMessageSelector } from 'containers/SnackMessage/selectors';

const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector(),
  redirectRoute: makeRedirectRouteSelector(),
  message: makeAlertMessageSelector(),
  snackMessage: makeSnackMessageSelector(),
});
interface FormProps {
  children?: React.ReactNode;
}

function PublicRoute(props: FormProps) {
  const { children } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogged, redirectRoute, message, snackMessage } =
    useSelector(stateSelector);

  useEffect(() => {
    if (isLogged) {
      const redirectUrl =
        Common.getParameterByName('', 'path') || SUCCESS_REDIRECT;
      navigate(redirectUrl);
    }
  }, [isLogged]);

  useEffect(() => {
    if (!message && !snackMessage && redirectRoute) {
      dispatch(clearRedirectAction());
      navigate(redirectRoute);
    }
  }, [message, snackMessage]);

  // if (isLogged === null) {
  //   return <LoadingIndicator />;
  // }
  return <>{children}</>;
}

export default PublicRoute;
