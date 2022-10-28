import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CHANGE_PASSWORD, CHANGE_PASSWORD_URL } from './constants';
import {
  makeFormValuesSelector,
} from './selectors';
import ApiEndpoint from '../../utils/api';
import request from '../../utils/request';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
} from './actions';
import { showAlert, showFormattedAlert } from '../../common/saga';
import { PUT } from '../../utils/constants';

export function* handleChangePassword() {
  yield put(asyncStartAction());
  const formValues: object = yield select(makeFormValuesSelector());
  const requestUrl = CHANGE_PASSWORD_URL;
  const requestPayload = ApiEndpoint.makeApiPayload(requestUrl, PUT, formValues, null);

  try {
    const response: {error?: string} = yield call(request, requestPayload);
    if (response && response.error) {
      yield put(asyncEndAction());
      if (typeof response.error === 'object') {
        yield put(enterValidationErrorAction(response.error));
      }
    }
    yield showAlert('success', "Change success");
    yield put(asyncEndAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
  }
}

export default function* changePasswordPageSaga() {
  yield takeLatest(CHANGE_PASSWORD, handleChangePassword);
}
