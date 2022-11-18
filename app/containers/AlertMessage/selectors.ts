import { createSelector } from 'reselect';
import { initialState } from 'containers/AlertMessage/reducer';
interface StateProp {
  show: boolean;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info' | undefined;
  id: string;
}
const selectAlertMessage = (state: any) => state.alertMessage || initialState;

const makeAlertMessageSelector = () =>
  createSelector(selectAlertMessage, (substate: StateProp) => substate.message);

const makeAlertMessageTypeSelector = () =>
  createSelector(selectAlertMessage, (substate: StateProp) => substate.type);

const makeAlertShowSelector = () =>
  createSelector(selectAlertMessage, (substate: StateProp) => substate.show);

const makeIdSelector = () =>
  createSelector(selectAlertMessage, (substate: StateProp) => substate.id);

export {
  makeIdSelector,
  makeAlertShowSelector,
  makeAlertMessageSelector,
  makeAlertMessageTypeSelector,
};
