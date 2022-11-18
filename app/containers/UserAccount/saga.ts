import { call, put, select, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  SUBMIT_AVATAR_FORM,
  SUBMIT_CHANGE_PASSWORD_FORM,
  SUBMIT_FORM,
  UPDATE_TWO_FA_STATUS,
  USER_AVATAR_URL,
  USER_PROFILE_URL,
} from 'containers/UserAccount/constants';
import {
  makeFormValuesSelector,
} from 'containers/UserAccount/selectors';
import {
  asyncEndAction,
  asyncStartAction,
  enterValidationErrorAction,
  initiateCleanAction,
} from 'containers/UserAccount/actions';
import { PUT } from 'utils/constants';
import messages from 'containers/UserAccount/messages';
import { showAlert, showFormattedAlert, showMessage } from 'common/saga';
import { getProfileAction } from 'containers/App/actions';
import { v4 as uuidv4 } from 'uuid';
import Common from 'utils/common';

export function* updateProfile() {
  yield put(asyncStartAction());
  const data: object = yield select(makeFormValuesSelector());
  const id: number = Number(localStorage.getItem('ID_USER'));
  const requestDto: object = {
    ...data,
    id,
  };

  const requestUrl = USER_PROFILE_URL;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, PUT, Common.trimObject(requestDto), null);

  try {
    yield call(request, payload);
    //yield put(getProfileAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('success', messages.profileUpdateSuccess);
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showAlert('error', error.data.message);
  }
}

export function* updateAvatar() {
  yield put(asyncStartAction());
  const data: object = yield select(makeFormValuesSelector());
  const requestUrl = USER_AVATAR_URL;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, PUT, data, 'multipart/form-data');

  try {
    yield call(request, payload);
    //yield put(getProfileAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('success', messages.profileUpdateSuccess);
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showAlert('error', error.data.message);
  }
}

export function* changePassword() {
  yield put(asyncStartAction());
  const data: object = yield select(makeFormValuesSelector());
  const requestUrl = `/auth/change-password`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, PUT, data, null);
  try {
    yield call(request, payload);
    yield put(asyncEndAction());
    yield put(initiateCleanAction());
    yield showFormattedAlert('success', messages.passwordChangeSuccess);
  } catch (error: any) {
    yield put(asyncEndAction());
    if (error.data && error.data.statusCode === 422) {
      yield put(enterValidationErrorAction(error.data.message));
    }
    yield showMessage({
      type: 'error',
      message: error.data.message,
      translate: false,
      id: uuidv4(),
    });
  }
}

export function* handleUpdateTwoFactorStatus() {
  yield put(asyncStartAction());
  const data: { isTwoFAEnabled?: boolean } = yield select(
    makeFormValuesSelector(),
  );
  const requestUrl = '';
  const payload = ApiEndpoint.makeApiPayload(requestUrl, PUT, data, null);
  try {
    yield call(request, payload);
    //yield put(getProfileAction());
    yield put(asyncEndAction());
    yield showMessage({
      type: 'success',
      message: data.isTwoFAEnabled
        ? messages.twoFaActivateCheck
        : messages.toggleTwoFaSuccess,
      translate: true,
      id: uuidv4(),
    });
  } catch (error: any) {
    yield put(asyncEndAction());
    yield showMessage({
      type: 'error',
      message: error.data.message,
      translate: false,
      id: uuidv4(),
    });
  }
}

export default function* editProfilePageSaga() {
  yield takeLatest(SUBMIT_FORM, updateProfile);
  yield takeLatest(SUBMIT_CHANGE_PASSWORD_FORM, changePassword);
  yield takeLatest(UPDATE_TWO_FA_STATUS, handleUpdateTwoFactorStatus);
  yield takeLatest(SUBMIT_AVATAR_FORM, updateAvatar);
}
