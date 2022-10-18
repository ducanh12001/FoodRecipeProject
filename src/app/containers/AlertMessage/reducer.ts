/*
 *
 * Alert Message reducer
 *
 */

import { v4 as uuidv4 } from 'uuid';
import produce, { setAutoFreeze } from 'immer';

import {
  SHOW_ALERT_MESSAGE,
  CLEAR_ALERT,
  ALERT_UNMOUNT,
} from './constants';
interface StateProp {
  show: boolean;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info' | undefined | string;
  id: string;
}
export const initialState: StateProp = {
  show: false,
  message: '',
  type: '',
  id: '',
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const alertReducer = produce((draft, action) => {
  switch (action.type) {
    case SHOW_ALERT_MESSAGE:
      draft.show = true;
      draft.message = action.alert.message;
      draft.type = action.alert.type;
      draft.id = uuidv4();
      break;
    case ALERT_UNMOUNT:
    case CLEAR_ALERT:
      draft.show = false;
      draft.message = '';
      draft.type = '';
      draft.id = '';
      break;
    default:
  }
}, initialState);

export default alertReducer;
