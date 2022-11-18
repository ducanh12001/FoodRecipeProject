import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CHANGE_PASSWORD, CHANGE_PASSWORD_URL } from 'containers/ChangePassword/constants';
import {
  makeFormValuesSelector,
} from 'containers/ChangePassword/selectors';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
} from 'containers/ChangePassword/actions';
import { showFormattedAlert } from 'common/saga';
import { PUT } from 'utils/constants';
import commonMessages from 'common/messages';
import messages from './messages';

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
    yield showFormattedAlert('success', messages.changeSuccess);
    yield put(asyncEndAction());
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

export default function* changePasswordPageSaga() {
  yield takeLatest(CHANGE_PASSWORD, handleChangePassword);
}
