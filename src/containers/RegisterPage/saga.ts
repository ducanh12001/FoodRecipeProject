import { REGISTER_PROCESS } from './constants';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
} from './actions';
import { makeFormValuesSelector } from './selectors';
import ApiEndpoint from '../../utils/api';
import request from '../../utils/request';
import { POST } from '../../utils/constants';
import { FormListFieldData } from 'antd/es/form';
import { showAlert, showFormattedAlert } from '../../common/saga';
import { sendRedirectAction } from '../App/actions';

export function* handleRegister() {
  yield put(asyncStartAction());
  const formValues: { confirmPassword?: string } = yield select(makeFormValuesSelector());
  const requestUrl = ApiEndpoint.getRegisterPath();
  delete formValues.confirmPassword;
  const requestPayload = ApiEndpoint.makeApiPayload(
    requestUrl,
    POST,
    formValues,
    null,
  );
  try {
    const response: {error?: FormListFieldData[]} = yield call(request, requestPayload);
    if (response && response.error) {
      yield put(enterValidationErrorAction(response.error));
    }
    yield put(asyncEndAction());
    yield showAlert('success', 'Register Success');
    yield put(sendRedirectAction('/login'));
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showAlert('error', error.data.message);
  }
}

export default function* registerPageSaga() {
  yield takeLatest(REGISTER_PROCESS, handleRegister);
}
