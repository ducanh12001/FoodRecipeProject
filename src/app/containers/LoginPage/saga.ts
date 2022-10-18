import { call, put, select, takeEvery } from 'redux-saga/effects';
import ApiEndpoint from '../../utils/api';
import request from '../../utils/request';
import { getProfileAction } from '../App/actions';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction
} from './actions';
import { LOGIN_PROCESS } from './constants';
import { makeFormValuesSelector } from './selectors';
import { clearSnackMessageAction } from '../SnackMessage/actions';
import { POST } from '../../utils/constants';

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
    yield call(request, requestPayload);
    yield put(asyncEndAction());
    yield put(clearSnackMessageAction());
    yield put(getProfileAction());
    // return yield showFormattedAlert('success', messages.loginSuccess);
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
  }
}

export default function* loginPageSaga() {
  yield takeEvery(LOGIN_PROCESS, attemptLogin);
}
