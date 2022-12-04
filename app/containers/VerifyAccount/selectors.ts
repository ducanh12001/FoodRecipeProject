import { createSelector } from 'reselect';
import { initialState } from 'containers/VerifyAccount/reducer';

const selectVerifyPageDomain = (state: any) => state.verifyPage || initialState;

const makeVerifyCodeSelector = () =>
  createSelector(selectVerifyPageDomain, (substate) => substate.verifyCode);

export { makeVerifyCodeSelector };
