import { createSelector } from 'reselect';
import { initialState } from 'containers/App/reducer';

interface User {
  email: string | null | undefined;
  avatar: any;
  id: number,
  fullName: string,
  birthday: any,
  phone: string,
  userType: string,
  address: string,
  genderType: string,
  startDay: Date,
  fileAvatarId: number
}

interface Props {
  user: User;
  isLogged: boolean;
  location: any;
  hideHeader: boolean;
  isLoading: boolean;
  device: any;
  collapsed: boolean;
  otpVerified: any;
  otp: any;
  otpError: any;
  redirectRoute: string;
}

const selectGlobal = (state: any) => state.global || initialState;

const selectRouter = (state: any) => state.router;

const makeLoggedInUserSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.user);

const makeIsLoggedSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.isLogged);

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState: Props) => routerState.location);

const makeHideHeaderSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.hideHeader);

const makeIsLoadingSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.isLoading);

const makeDeviceSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.device);

const makeCollapsedSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.collapsed);

const makeOtpVerificationSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.otpVerified);

const makeOtpValueSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.otp);

const makeOtpErrorSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.otpError);

const makeRedirectRouteSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.redirectRoute);  

export {
  makeOtpErrorSelector,
  makeOtpValueSelector,
  makeOtpVerificationSelector,
  makeCollapsedSelector,
  makeDeviceSelector,
  makeIsLoadingSelector,
  makeHideHeaderSelector,
  makeLoggedInUserSelector,
  makeIsLoggedSelector,
  makeSelectLocation,
  makeRedirectRouteSelector,
};
