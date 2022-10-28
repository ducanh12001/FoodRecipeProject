import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { LoginState } from '../../type/type.login';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state: any) => state.login || initialState;

/**
 * Other specific selectors
 */

const makeInitialValuesSelector = () =>
  createSelector(selectLoginPageDomain, (substate: LoginState) => substate.initialValues);

const makeFormValuesSelector = () =>
  createSelector(selectLoginPageDomain, (substate: LoginState) => substate.formValues);

const makeErrorSelector = () =>
  createSelector(selectLoginPageDomain, (substate: LoginState) => substate.errors);

const makeIsLoadingSelector = () =>
  createSelector(selectLoginPageDomain, (substate: LoginState) => substate.isLoading);

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, (substate) => substate);

export default makeSelectLoginPage;

export {
  makeInitialValuesSelector,
  makeFormValuesSelector,
  makeErrorSelector,
  makeIsLoadingSelector,
};
