/**
 *
 * Private Route
 *
 */

import LoadingIndicator from 'components/LoadingIndicator';
import { makeAlertMessageSelector } from 'containers/AlertMessage/selectors';
import { clearRedirectAction } from 'containers/App/actions';
import {
  makeIsLoggedSelector,
  makeLoggedInUserSelector,
  makeRedirectRouteSelector,
} from 'containers/App/selectors';
import { makeSnackMessageSelector } from 'containers/SnackMessage/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  isLogged: makeIsLoggedSelector(),
  redirectRoute: makeRedirectRouteSelector(),
  message: makeAlertMessageSelector(),
  snackMessage: makeSnackMessageSelector(),
});

interface PrivateProps {
  children?: React.ReactNode;
  path?: string;
  resource?: any;
  method?: any;
}

function PrivateRoute({ children, path, }: PrivateProps) {
  const { isLogged, user, redirectRoute, message, snackMessage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isLogged) {
      
    }
  }, [user, path]);

  useEffect(() => {
    if (!message && !snackMessage && redirectRoute) {
      dispatch(clearRedirectAction());
      navigate(redirectRoute);
    }    
  }, [message, snackMessage]);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }
  
  return isLogged ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
