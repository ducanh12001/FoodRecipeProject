import { delay, put, takeLatest } from 'redux-saga/effects';
import { AUTO_DISMISS_ALERT } from './constants';
import { clearAlertAction } from './actions';

export function* dismissAlertAction() {
  yield delay(5000);
  yield put(clearAlertAction());
}

export default function* snackBarSaga() {
  yield takeLatest(AUTO_DISMISS_ALERT, dismissAlertAction);
}
