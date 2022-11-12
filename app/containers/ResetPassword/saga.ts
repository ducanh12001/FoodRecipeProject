import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RESET_PASSWORD } from 'containers/ResetPassword/constants';
import {
  makeCodeSelector,
  makeFormValuesSelector,
} from 'containers/ResetPassword/selectors';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
} from 'containers/ResetPassword/actions';
import messages from 'containers/ResetPassword/messages';
import { showAlert, showFormattedAlert } from 'common/saga';
import { PUT } from 'utils/constants';

export function* handleResetPassword() {
  yield put(asyncStartAction());
  const formValues: object = yield select(makeFormValuesSelector());
  const requestUrl = `/ext/users/password`;
  const newPass: string = formValues.password;
  const oldPass: string = formValues.oldPassword;
  const requestPayload = ApiEndpoint.makeApiPayload(
    requestUrl,
    PUT,
    {
      newPass,
      oldPass,
    },
    null,
  );
  try {
    const response: { error?: string } = yield call(request, requestPayload);
    if (response && response.error) {
      yield put(asyncEndAction());
      if (typeof response.error === 'object') {
        yield put(enterValidationErrorAction(response.error));
      }
    }
    yield showFormattedAlert('success', messages.resetSuccess);
    yield put(asyncEndAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showAlert('error', error.data.message);
  }
}

export default function* résetPasswordPageSaga() {
  yield takeLatest(RESET_PASSWORD, handleResetPassword);
}
