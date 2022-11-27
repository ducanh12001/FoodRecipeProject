import { CONFIRM_EMAIL_URL, REGISTER_PROCESS, SEND_CODE_REGISTER } from 'containers/RegisterPage/constants';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
} from 'containers/RegisterPage/actions';
import { makeFormValuesSelector } from 'containers/RegisterPage/selectors';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import messages from 'containers/RegisterPage/messages';
import { showAlert, showFormattedAlert } from 'common/saga';
import { POST } from 'utils/constants';
import { FormListFieldData } from 'antd/es/form';
import { sendRedirectAction } from 'containers/App/actions';
import Common from 'utils/common';

export function* handleRegister() {
  yield put(asyncStartAction());
  const formValues: { confirmPassword?: string, accept?: boolean } = yield select(makeFormValuesSelector());
  const requestUrl = ApiEndpoint.getRegisterPath();
  delete formValues.confirmPassword;
  delete formValues.accept;
  const requestPayload = ApiEndpoint.makeApiPayload(
    requestUrl,
    POST,
    Common.trimObject(formValues),
    null,
  );
  try {
    const response: {error?: FormListFieldData[]} = yield call(request, requestPayload);
    if (response && response.error) {
      yield put(enterValidationErrorAction(response.error));
    }
    yield put(asyncEndAction());
    yield showFormattedAlert('success', messages.registerSuccess);
    yield put(sendRedirectAction('/login'));
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showAlert('error', error.data.message);
  }
}

export function* sendCodeRegisterAction(data:any) {
  yield put(asyncStartAction());
  const requestUrl = CONFIRM_EMAIL_URL;
  const requestPayload = ApiEndpoint.makeApiPayload(requestUrl, POST, null, null);
  try {

    yield put(asyncEndAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    yield showAlert('error', error.data.message);
  }
}

export default function* registerPageSaga() {
  yield takeLatest(REGISTER_PROCESS, handleRegister);
  yield takeLatest(SEND_CODE_REGISTER, sendCodeRegisterAction)
}
