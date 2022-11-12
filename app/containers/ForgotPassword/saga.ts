import { call, put, select, takeLatest } from 'redux-saga/effects';
import { FORGOT_PASSWORD } from 'containers/ForgotPassword/constants';
import { makeFormValuesSelector } from 'containers/ForgotPassword/selectors';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  asyncEndAction,
  asyncStartAction,
} from 'containers/ForgotPassword/actions';
import { showAlert, showFormattedAlert } from 'common/saga';
import { PUT } from 'utils/constants';
import { enterValidationErrorAction } from 'containers/LoginPage/actions';
import commonMessages from 'common/messages';
import messages from './messages';

export function* handleForgotPassword() {
  yield put(asyncStartAction());
  const formValues: string = yield select(makeFormValuesSelector());
  const requestUrl = `/ext/users/password/forgot?username=${formValues.replace('@', '%40')}`;
  const requestPayload = ApiEndpoint.makeApiPayload(
    requestUrl,
    PUT,
    formValues,
    null,
  );
  try {
    yield call(request, requestPayload);
    yield put(asyncEndAction());
    yield showFormattedAlert('success', messages.mailSent);
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    if (error?.data?.code) {
      yield showFormattedAlert('error', messages[`error.${error.data.code}`]);
    } else {
      yield showFormattedAlert('error', commonMessages.internalError);
    }
  }
}

export default function* forgotPasswordSaga() {
  yield takeLatest(FORGOT_PASSWORD, handleForgotPassword);
}
