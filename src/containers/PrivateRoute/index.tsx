/**
 *
 * Private Route
 *
 */
// @ts-nocheck
import LoadingIndicator from '../../components/LoadingIndicator';
import { makeAlertMessageSelector } from '../AlertMessage/selectors';
import { clearRedirectAction } from '../App/actions';
import {
  makeIsLoggedSelector,
  makeLoggedInUserSelector,
  makeOtpErrorSelector,
  makeOtpVerificationSelector,
  makeRedirectRouteSelector,
} from '../App/selectors';
import PermissionDeniedPage from '../PermissionDeniedPage';
import { makeSnackMessageSelector } from '../SnackMessage/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { checkPermissionForComponent } from '../../utils/permission';

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  otpError: makeOtpErrorSelector(),
  isLogged: makeIsLoggedSelector(),
  otpVerified: makeOtpVerificationSelector(),
  redirectRoute: makeRedirectRouteSelector(),
  message: makeAlertMessageSelector(),
  snackMessage: makeSnackMessageSelector(),
});

interface PrivateProps {
  children?: React.ReactNode;
  path?: string;
  resource?: any;
  method?: any;
  defaultPermission?: boolean;
}

function PrivateRoute({ children, path, resource, method, defaultPermission }: PrivateProps) {
  const { isLogged, user, otpVerified, redirectRoute, message, snackMessage } = useSelector(stateSelector);
  const [permitted, setPermitted] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      setPermitted(
        checkPermissionForComponent(user.role, {
          path,
          resource,
          method,
          defaultPermission,
        }),
      );
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

  //  if (!permitted && otpVerified) {
  //    return <PermissionDeniedPage />;
  //  }
  return isLogged ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
