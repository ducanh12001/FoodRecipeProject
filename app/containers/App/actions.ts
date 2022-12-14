/*
 *
 * App actions
 *
 */

import {
  ASYNC_END,
  ASYNC_START,
  CHANGE_DEVICE,
  CHANGE_FIELD,
  CLEAR_REDIRECT,
  GET_AVATAR_ERROR,
  GET_AVATAR_REQUEST,
  GET_AVATAR_SUCCESS,
  GET_PROFILE_ERROR,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  HIDE_HEADER,
  IS_LOGGED,
  IS_LOGGED_ERROR,
  IS_LOGGED_SUCCESS,
  LOGGED_IN,
  LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  QUERY_NOTIFICATIONS,
  REFRESH_TOKEN,
  SEND_REDIRECT,
  TOGGLE_COLLAPSE,
} from 'containers/App/constants';
import { User } from 'type/type.user';

/**
 *
 * @param user
 * @returns {{type: string, user: *}}
 */
export function getProfileSuccessAction(user: User) {
  return {
    type: GET_PROFILE_SUCCESS,
    user,
  };
}

/**
 *
 * @param error
 * @returns {{type: string, error: *}}
 */
export function getProfileErrorAction(error: string) {
  return {
    type: GET_PROFILE_ERROR,
    error,
  };
}

/**
 *
 * @returns {{type: string}}
 */
export function getProfileAction() {
  return {
    type: GET_PROFILE_REQUEST,
  };
}

/**
 *
 * @param avatar
 * @returns {{type: string, avatar: *}}
 */
 export function getAvatarSuccessAction(avatar: string) {
  return {
    type: GET_AVATAR_SUCCESS,
    avatar,
  };
}

/**
 *
 * @param error
 * @returns {{type: string, error: *}}
 */
export function getAvatarErrorAction(error: string) {
  return {
    type: GET_AVATAR_ERROR,
    error,
  };
}

/**
 *
 * @returns {{type: string}}
 */
export function getAvatarAction() {
  return {
    type: GET_AVATAR_REQUEST,
  };
}

/**
 * Check user is logged, this action starts the request saga
 *
 * @return {object} An action object with a type of IS_LOGGED
 */
export function isLoggedAction() {
  return {
    type: IS_LOGGED,
  };
}

/**
 * TODO
 * Check user is logged, this action starts the request saga
 *
 * @return {object} An action object with a type of IS_LOGGED
 */
export function isLoggedSuccessAction() {
  return {
    type: IS_LOGGED_SUCCESS,
  };
}

/**
 * TODO
 * Check user is logged, this action starts the request saga
 *
 * @return {object} An action object with a type of IS_LOGGED
 */
export function isLoggedErrorAction() {
  return {
    type: IS_LOGGED_ERROR,
  };
}

/**

 * User login to the application, this is the global action
 *
 * @return {object} An action object with a type of LOGGED_IN
 */
export function loggedInAction() {
  return {
    type: LOGGED_IN,
  };
}

/**
 * Start the logout process, this action starts the request saga
 *
 * @return {object} An action object with a type of LOGOUT
 */
export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

/**
 * Dispatched when the logout process are loaded by the request saga
 *
 * @return {object} An action object with a type of LOGOUT_SUCCESS
 */
export function logoutSuccessAction() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function asyncStartAction() {
  return {
    type: ASYNC_START,
  };
}

export function asyncEndAction() {
  return {
    type: ASYNC_END,
  };
}

export function refreshTokenAction() {
  return {
    type: REFRESH_TOKEN,
  };
}

export function logoutErrorAction(error: any) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function queryNotificationAction() {
  return {
    type: QUERY_NOTIFICATIONS,
  };
}

export function hideHeaderAction(val: any) {
  return {
    type: HIDE_HEADER,
    val,
  };
}

export function changeAppFieldAction({
  key,
  val,
}: {
  key: string | number;
  val: string;
}) {
  return {
    type: CHANGE_FIELD,
    key,
    val,
  };
}

export function toggleCollapseAction(toggle: boolean) {
  return {
    type: TOGGLE_COLLAPSE,
    toggle,
  };
}

export function changeDeviceAction(device: string) {
  return {
    type: CHANGE_DEVICE,
    device,
  };
}

export function sendRedirectAction(redirectRoute: string) {
  return {
    type: SEND_REDIRECT,
    redirectRoute
  };
}

export function clearRedirectAction() {
  return {
    type: CLEAR_REDIRECT,
  };
}
