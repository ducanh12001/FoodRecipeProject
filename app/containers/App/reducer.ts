/*
 *
 * AuthProvider reducer
 *
 */
import produce, { setAutoFreeze } from 'immer';

import {
  CHANGE_FIELD,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
  HIDE_HEADER,
  IS_LOGGED_ERROR,
  IS_LOGGED_SUCCESS,
  LOGGED_IN,
  LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  ASYNC_END,
  ASYNC_START,
  TOGGLE_COLLAPSE,
  CHANGE_DEVICE,
  SEND_REDIRECT,
  CLEAR_REDIRECT,
} from 'containers/App/constants';

import { User } from 'type/type.user';

const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
  ? 'MOBILE'
  : 'DESKTOP';
const collapsed = device !== 'DESKTOP';

interface initState {
  hideHeader: boolean;
  isLoading: boolean;
  device: string;
  collapsed: boolean;
  isLogged: boolean | null;
  errors: Array<string>;
  user?: User | null;
  redirectRoute: string;
}

export const initialState: initState = {
  device,
  collapsed,
  hideHeader: false,
  isLoading: false,
  isLogged: null,
  errors: [],
  user: {
    name: '',
    profile_image: '',
    phone: '',
    email: '',
    updated_at: ''
  },
  redirectRoute: ''
};

type TypeAction = {
  key: number;
  val: any;
};

setAutoFreeze(false);
/* eslint-disable default-case, no-param-reassign */
const appPageReducer = produce((draft, action: TypeAction | any) => {
  switch (action.type) {
    case SEND_REDIRECT:
      draft.redirectRoute = action.redirectRoute;
      break;
    case CLEAR_REDIRECT:
      draft.redirectRoute = '';
      break;
    case CHANGE_FIELD:
      Object.keys(draft)[action.key] = action.val;
      draft.errors[action.key] = '';
      draft.isLoading = false;
      break;
    case CHANGE_DEVICE:
      draft.device = action.device;
      break;
    case TOGGLE_COLLAPSE:
      draft.collapsed = action.toggle;
      break;
    case LOGGED_IN:
    case IS_LOGGED_SUCCESS:
      draft.isLogged = true;
      break;
    case HIDE_HEADER:
      draft.hideHeader = action.val;
      break;
    case IS_LOGGED_ERROR:
      draft.isLogged = false;
      break;
    case GET_PROFILE_SUCCESS:
      draft.user = action.user;
      break;
    case GET_PROFILE_ERROR:
      draft.errors = [action.error];
      break;
    case ASYNC_START:
      draft.isLoading = true;
      break;
    case ASYNC_END:
      draft.isLoading = false;
      break;
    case LOGOUT:
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      draft.errors = [];
      draft.user = {
        name: null,
        email: null,
        phone: null,
        profile_image: null,
        updated_at: null
      };
      draft.isLogged = false;
      break;
    default:
  }
}, initialState);

export default appPageReducer;
