/**
 *
 * Private Route
 *
 */

 import LoadingIndicator from '../../components/LoadingIndicator';
 import {
   makeIsLoggedSelector,
   makeLoggedInUserSelector,
   makeOtpErrorSelector,
   makeOtpVerificationSelector,
 } from '../App/selectors';
 import PermissionDeniedPage from '../PermissionDeniedPage';
 import React, { useEffect, useState } from 'react';
 import { useSelector } from 'react-redux';
 import { Navigate } from 'react-router-dom';
 import { createStructuredSelector } from 'reselect';
 import { checkPermissionForComponent } from '../../utils/permission';
 
 const stateSelector = createStructuredSelector({
   user: makeLoggedInUserSelector(),
   otpError: makeOtpErrorSelector(),
   isLogged: makeIsLoggedSelector(),
   otpVerified: makeOtpVerificationSelector(),
 });
 
 interface PrivateProps {
   children?: React.ReactNode;
   path?: string;
   resource?: any;
   method?: any;
   defaultPermission?: boolean;
 }
 
 function PrivateRoute({ children, path, resource, method, defaultPermission }: PrivateProps) {
   const { isLogged, user, otpVerified } = useSelector(stateSelector);
   const [permitted, setPermitted] = useState(true);
 
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
 
   if (isLogged === null) {
     return <LoadingIndicator />;
   }
 
   if (!permitted && otpVerified) {
     return <PermissionDeniedPage />;
   }
   return isLogged ? <>{children}</> : <Navigate to="/login" />;
 }
 
 export default PrivateRoute;
 