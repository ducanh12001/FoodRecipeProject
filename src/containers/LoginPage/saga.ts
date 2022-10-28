// @ts-nocheck
import { call, put, select, takeEvery } from 'redux-saga/effects';
import ApiEndpoint from '../../utils/api';
import request from '../../utils/request';
import { getProfileAction, isLoggedSuccessAction } from '../App/actions';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction
} from './actions';
import { LOGIN_PROCESS } from './constants';
import { makeFormValuesSelector } from './selectors';
import { clearSnackMessageAction } from '../SnackMessage/actions';
import { POST } from '../../utils/constants';
import { showAlert } from '../../common/saga';

export function* attemptLogin() {
  yield put(asyncStartAction());
  const formValues:object = yield select(makeFormValuesSelector());
  const requestUrl = ApiEndpoint.getLoginPath();
  const requestPayload = ApiEndpoint.makeApiPayload(
    requestUrl,
    POST,
    formValues,
    null,
  );
  try {
    const response:object = yield call(request, requestPayload);
    localStorage.setItem('ACCESS_TOKEN', response.data.accessToken || '');
    yield put(asyncEndAction());
    yield put(clearSnackMessageAction());
    yield put(isLoggedSuccessAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error?.data) {
      yield showAlert('error', error.data.message);
    } else {
      yield showAlert('error', 'Invalid Error');      
    }
  }
}

export default function* loginPageSaga() {
  yield takeEvery(LOGIN_PROCESS, attemptLogin);
}
