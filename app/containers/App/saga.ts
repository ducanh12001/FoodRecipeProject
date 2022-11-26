import axios from 'axios';
import messages from 'common/messages';
import { showAlert, showFormattedAlert, showMessage } from 'common/saga';
import {
  asyncEndAction,
  asyncStartAction, getProfileAction,
  getProfileSuccessAction,
  hideHeaderAction,
  isLoggedErrorAction,
  isLoggedSuccessAction,
  logoutErrorAction,
  logoutSuccessAction,
} from 'containers/App/actions';
import {
  GET_PROFILE_REQUEST,
  LOGOUT,
  REFRESH_TOKEN
} from 'containers/App/constants';
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
    const response: object = yield call(request, payload);
    const user = response.data.data;
    localStorage.setItem('USER_ID', user._id);
    yield put(isLoggedSuccessAction());
    yield put(hideHeaderAction(false));
    yield put(getProfileSuccessAction(user));
  } catch (error) {
    if (error?.data) {
      yield showAlert('error', error.data.message);
    } else {
      yield put(isLoggedErrorAction());
    }   
  }
}

export function* handleLogout() {
  const requestUrl = ApiEndpoint.getLogoutPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, true, {});

  try {
    //yield call(request, payload);
    localStorage.removeItem('ACCOUNT_LOGIN');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    localStorage.removeItem('USER_ID');
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
    yield put(getProfileAction());
  } catch (error) {
    yield put(isLoggedErrorAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('error', messages.invalidRefresh);
  }
}

export default function* appPageSaga() {
  yield takeEvery(LOGOUT, handleLogout);
  yield takeLatest(GET_PROFILE_REQUEST, handleProfile);
  yield takeLatest(REFRESH_TOKEN, handleRefreshToken);
}
