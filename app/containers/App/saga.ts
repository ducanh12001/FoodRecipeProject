import axios from 'axios';
import messages from 'common/messages';
import { showFormattedAlert, showMessage } from 'common/saga';
import {
  asyncEndAction,
  asyncStartAction, getProfileAction,
  getProfileSuccessAction,
  hideHeaderAction,
  isLoggedErrorAction,
  isLoggedSuccessAction,
  logoutErrorAction,
  logoutSuccessAction,
  otpCodeErrorAction,
  otpVerifiedAction
} from 'containers/App/actions';
import {
  AUTHENTICATE_OTP, GET_PROFILE_REQUEST,
  LOGOUT,
  REFRESH_TOKEN
} from 'containers/App/constants';
import { makeOtpValueSelector } from 'containers/App/selectors';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { User } from 'type/type.user';
import ApiEndpoint from 'utils/api';
import { GET, POST } from 'utils/constants';
import request from 'utils/request';
import { v4 as uuidv4 } from 'uuid';

export function* handleProfile() {
  const requestUrl = ApiEndpoint.getProfilePath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: User = yield call(request, payload);
    const user = response;
    yield put(isLoggedSuccessAction());
    yield put(hideHeaderAction(false));
    yield put(getProfileSuccessAction(user));
  } catch (error) {
    console.log(error);
    yield put(isLoggedErrorAction());
  }
}

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

export function* handleLogout() {
  const requestUrl = ApiEndpoint.getLogoutPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, true, {});

  try {
    //yield call(request, payload);
    localStorage.removeItem('ACCOUNT_LOGIN');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    localStorage.removeItem('state');
    yield put(logoutSuccessAction());
  } catch (error) {
    yield put(logoutErrorAction(error));
  }
}

/**
 * handle refresh token action
 * @returns {IterableIterator<*>}
 */

export function* handleRefreshToken() {
  yield put(asyncStartAction());

  try {
    yield put(JSON.parse(localStorage.getItem('REFRESH_TOKEN') || ''));
    //return yield put(getProfileAction());
    yield put(isLoggedSuccessAction());
    yield put(hideHeaderAction(false));
  } catch (error) {
    yield put(isLoggedErrorAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('error', messages.invalidRefresh);
  }
}

export function* handleAuthenticateOtp() {
  yield put(asyncStartAction());
  const code: string = yield select(makeOtpValueSelector());
  const requestUrl = '';
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, { code }, null);
  try {
    yield call(request, payload);
    //yield put(getProfileAction());
    yield put(otpVerifiedAction());
    yield put(asyncEndAction());
    yield showMessage({
      type: 'success',
      message: messages.otpVerificationSuccess,
      translate: true,
      id: uuidv4(),
    });
  } catch (error: any) {
    if (error.data?.message) {
      yield showMessage({
        type: 'error',
        message: error.data?.message,
        translate: false,
        id: uuidv4(),
      });
    }
    yield put(otpCodeErrorAction());
    yield put(asyncEndAction());
  }
}

export default function* appPageSaga() {
  yield takeEvery(LOGOUT, handleLogout);
  yield takeLatest(GET_PROFILE_REQUEST, handleProfile);
  yield takeLatest(REFRESH_TOKEN, handleRefreshToken);
  yield takeEvery(AUTHENTICATE_OTP, handleAuthenticateOtp);
}
