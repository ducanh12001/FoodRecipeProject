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
  OTP_VERIFIED,
  OTP_UNVERIFIED,
  CHANGE_OTP_VALUE,
  OTP_ERROR,
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
  otpVerified: boolean;
  otp: string | null;
  otpError: boolean;
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
  otpVerified: true,
  otp: '',
  otpError: false,
  isLogged: null,
  errors: [],
  user: {
    avartar: '',
    name: '',
    username: '',
    fullName: '',
    isActive: false,
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
    case OTP_ERROR:
      draft.otpError = true;
      break;
    case CHANGE_FIELD:
      Object.keys(draft)[action.key] = action.val;
      draft.errors[action.key] = '';
      draft.isLoading = false;
      break;
    case CHANGE_DEVICE:
      draft.device = action.device;
      break;
    case OTP_VERIFIED:
      draft.otpVerified = true;
      break;
    case CHANGE_OTP_VALUE:
      draft.otp = action.otp;
      draft.otpError = false;
      break;
    case OTP_UNVERIFIED:
      draft.otpVerified = false;
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
      draft.otpVerified = true;
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
      draft.otp = '';
      draft.user = {
        avartar: null,
        name: null,
        username: null,
        fullName: null,
        isActive: false,
        birthday: undefined,
        address: null,
        genderType: null,
        email: null,
        phone: null,
      };
      draft.isLogged = false;
      draft.otpError = false;
      break;
    default:
  }
}, initialState);

export default appPageReducer;
