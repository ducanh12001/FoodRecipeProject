import { createSelector } from 'reselect';
import { initialState } from 'containers/App/reducer';

interface User {
  email: string | null | undefined;
  id: number,
  phone: string,
}

interface Props {
  user: User;
  isLogged: boolean;
  location: any;
  hideHeader: boolean;
  isLoading: boolean;
  device: any;
  collapsed: boolean;
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

const makeRedirectRouteSelector = () =>
  createSelector(selectGlobal, (globalState: Props) => globalState.redirectRoute);  

export {
  makeCollapsedSelector,
  makeDeviceSelector,
  makeIsLoadingSelector,
  makeHideHeaderSelector,
  makeLoggedInUserSelector,
  makeIsLoggedSelector,
  makeSelectLocation,
  makeRedirectRouteSelector,
};
