import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { InitialStateType } from '../../type/type.snackMessage';

const selectSnackMessage = (state: any) => state.snackMessage || initialState;

const makeSnackMessageSelector = () =>
  createSelector(selectSnackMessage, (substate: InitialStateType) => substate.message);

const makeSnackMessageTypeSelector = () =>
  createSelector(selectSnackMessage, (substate: InitialStateType) => substate.type);

const makeIdSelector = () =>
  createSelector(selectSnackMessage, (substate: InitialStateType) => substate.id);

const makeDurationSelector = () =>
  createSelector(selectSnackMessage, (substate: InitialStateType) => substate.duration);

const makeTranslateSelector = () =>
  createSelector(selectSnackMessage, (substate: InitialStateType) => substate.translate);

export {
  makeTranslateSelector,
  makeDurationSelector,
  makeIdSelector,
  makeSnackMessageSelector,
  makeSnackMessageTypeSelector,
};
