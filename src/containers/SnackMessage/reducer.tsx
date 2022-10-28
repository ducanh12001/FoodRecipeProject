/*
 *
 * Snack Message reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import {
  SHOW_SNACK_MESSAGE,
  CLEAR_SNACK,
  SNACK_UNMOUNT,
} from './constants';

export const initialState = {
  message: '',
  type: '',
  duration: 3,
  translate: false,
  id: '',
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const snackMessageReducer = produce((draft, action) => {
  switch (action.type) {
    case SHOW_SNACK_MESSAGE:
      draft.message = action.snack.message;
      draft.type = action.snack.type;
      draft.translate = action.snack.translate;
      draft.duration = action.snack.duration || 3;
      draft.id = action.snack.id || uuidv4();
      break;
    case SNACK_UNMOUNT:
    case CLEAR_SNACK:
      draft.message = '';
      draft.type = '';
      draft.id = '';
      draft.translate = false;
      break;
    default:
  }
}, initialState);

export default snackMessageReducer;
