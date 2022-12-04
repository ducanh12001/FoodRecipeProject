import { call, select, takeLatest } from 'redux-saga/effects';
import { VERIFY_VERIFY_CODE } from 'containers/VerifyAccount/constants';
import { makeVerifyCodeSelector } from 'containers/VerifyAccount/selectors';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import messages from 'containers/VerifyAccount/messages';
import { showFormattedAlert } from 'common/saga';
import { GET } from 'utils/constants';

export function* handleVerifyCode() {
  const code: string = yield select(makeVerifyCodeSelector());
  const requestUrl = `/auth/activate-account?token=${code}`;
  const requestPayload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    yield call(request, requestPayload);
    yield showFormattedAlert('success', messages.activated);
    // return yield put(push(LOGIN_REDIRECT));
  } catch (e) {
    yield showFormattedAlert('error', messages.invalidVerification);
    // return yield put(push(LOGIN_REDIRECT));
  }
}

export default function* verifyAccountPageSaga() {
  yield takeLatest(VERIFY_VERIFY_CODE, handleVerifyCode);
}
