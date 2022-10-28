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
  OTP_ERROR,
  OTP_VERIFIED,
  CHANGE_OTP_VALUE,
  OTP_UNVERIFIED,
} from './constants';

import { User } from '../../type/type.user';

const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
  ? 'MOBILE'
  : 'DESKTOP';
const collapsed = device !== 'DESKTOP';

interface initState {
  isLoading: boolean;
  device: string;
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
  isLoading: false,
  otpVerified: true,
  otp: '',
  otpError: false,
  isLogged: null,
  errors: [],
  user: {
    avartar: '',
    name: '',
    image: '',
    fullName: '',
    isActive: false,
    role: '',
    address: '',
    birthday: '',
    genderType: '',
    phone: '',
    email: ''
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
    case LOGGED_IN:
    case IS_LOGGED_SUCCESS:
      draft.isLogged = true;
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
        fullName: null,
        isActive: false,
        birthday: undefined,
        address: null,
        genderType: null,
        email: null,
        phone: null,
        role: null,
      };
      draft.isLogged = false;
      draft.otpError = false;
      break;
    default:
  }
}, initialState);

export default appPageReducer;
