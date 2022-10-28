import axios from 'axios';
import {
  asyncEndAction,
  asyncStartAction, getProfileAction,
  getProfileSuccessAction,
  isLoggedErrorAction,
  isLoggedSuccessAction,
  logoutErrorAction,
  logoutSuccessAction,
  sendRedirectAction,
} from './actions';
import {
  LOGOUT,
  REFRESH_TOKEN
} from './constants';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from '../../utils/api';
import { GET, POST } from '../../utils/constants';
import request from '../../utils/request';
import { v4 as uuidv4 } from 'uuid';

export function* handleLogout() {
  const requestUrl = ApiEndpoint.getLogoutPath();
  const payload = ApiEndpoint.makeApiPayload(requestUrl, POST, true, {});

  try {
    //yield call(request, payload);
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('state');
    yield put(logoutSuccessAction());
    yield put(sendRedirectAction('/'));
  } catch (error) {
    yield put(logoutErrorAction(error));
  }
}

export default function* appPageSaga() {
  yield takeEvery(LOGOUT, handleLogout);
}
