import { call, put, select, takeEvery } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import { showAlert, showFormattedAlert } from 'common/saga';
import { getProfileAction, hideHeaderAction, isLoggedErrorAction, isLoggedSuccessAction } from 'containers/App/actions';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction
} from 'containers/LoginPage/actions';
import { LOGIN_PROCESS } from 'containers/LoginPage/constants';
import { makeFormValuesSelector } from 'containers/LoginPage/selectors';
import { clearSnackMessageAction } from 'containers/SnackMessage/actions';
import { POST } from 'utils/constants';
import commonMessages from 'common/messages';
import messages from './messages';

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
    var response:object = yield call(request, requestPayload);
    
    localStorage.setItem('ACCESS_TOKEN', response?.data?.accessToken);
    localStorage.setItem('ACCOUNT_LOGIN', response?.data?.email);
    //yield put(clearSnackMessageAction());
    yield put(getProfileAction());
    yield put(asyncEndAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    if (error?.data) {
      yield showAlert('error', error.data.message);
    } else {
      yield showFormattedAlert('error', commonMessages.internalError);      
    }
    
  }
}

export default function* loginPageSaga() {
  yield takeEvery(LOGIN_PROCESS, attemptLogin);
}
