/**
 *
 * Public Route
 *
 */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeIsLoggedSelector } from '../App/selectors';
import LoadingIndicator from '../../components/LoadingIndicator';
import Common from '../../utils/common';
import { SUCCESS_REDIRECT } from '../LoginPage/constants';

const stateSelector = createStructuredSelector({
  isLogged: makeIsLoggedSelector(),
});
interface FormProps {
  children?: React.ReactNode;
}

function PublicRoute(props: FormProps) {
  const { children } = props;
  const navigate = useNavigate();
  const { isLogged } = useSelector(stateSelector);

  useEffect(() => {
    if (isLogged) {
      const redirectUrl = Common.getParameterByName('', 'path') || SUCCESS_REDIRECT;
      navigate(redirectUrl);
    }
  }, [isLogged]);

  if (isLogged === null) {
    return <LoadingIndicator />;
  }
  return <>{children}</> ;
}

export default PublicRoute;
