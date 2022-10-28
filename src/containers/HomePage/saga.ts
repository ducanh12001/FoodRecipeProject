import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  assignRecipesAction,
  asyncEndAction,
  asyncStartAction,
  clearFormFieldAction,
} from './actions';
import { showAlert } from '../../common/saga';
import Common from '../../utils/common';
import ApiEndpoint from '../../utils/api';
import request from '../../utils/request';
import { makeFormValuesSelector } from './selectors';
import history from '../../utils/history';
import { GET, POST } from '../../utils/constants';
import { ASSIGN_RECIPES, RECIPE_URL, SUBMIT_FORM } from './constants';

function forwardTo(location: string) {
  history.push(location);
  document.location.reload();
}

export function* handleSubmitForm() {
  const formValues: object = yield select(makeFormValuesSelector());
  const requestUrl = `/api/recipe`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    POST,
    Common.trimObject(formValues),
    null,
  );
  console.log(payload, formValues);
  try {
    yield call(request, payload);
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    yield showAlert('success', 'Success');
    yield call(forwardTo, '/');
  } catch (error: any) {
    yield put(asyncEndAction());
    yield showAlert('error', error.data.message);
  }
}

export function* handleQueryRecipesList() {
  yield put(asyncStartAction());
  console.log('das')
  const requestUrl = `${RECIPE_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: object = yield call(request, payload);
    console.log("k",response);
    yield put(assignRecipesAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}


export default function* homePageSaga() {
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(ASSIGN_RECIPES, handleQueryRecipesList);
}

