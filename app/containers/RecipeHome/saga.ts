import { call, put, select, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  assignRecipesAction,
  asyncEndAction,
  asyncStartAction,
  clearFormFieldAction,
} from 'containers/RecipeHome/actions';
import { GET, POST, PUT } from 'utils/constants';
import Common from 'utils/common';
import { ASSIGN_RECIPES, QUERY_RECIPES, RECIPE_URL, SUBMIT_FORM } from './constants';
import { showAlert } from 'common/saga';
import { makeFormValuesSelector } from './selectors';
import history from 'utils/history';
import { sendRedirectAction } from 'containers/App/actions';
import { RecipeType, ResponseDataType } from 'type/type.recipe';

export function* handleSubmitForm() {
  const formValues: object = yield select(makeFormValuesSelector());
  const requestUrl = `${RECIPE_URL}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    POST,
    Common.trimObject(formValues),
    null,
  );
  try {
    yield call(request, payload);
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    yield showAlert('success', 'Success');
    yield put(sendRedirectAction('/home'));
  } catch (error: any) {
    yield put(asyncEndAction());
    yield showAlert('error', error.data.message);
  }
}

export function* handleQueryRecipesList() {
  yield put(asyncStartAction());
  const requestUrl = `${RECIPE_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseDataType = yield call(request, payload);
    yield put(assignRecipesAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export default function* marketStorePageSaga() {
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(QUERY_RECIPES, handleQueryRecipesList);
}
