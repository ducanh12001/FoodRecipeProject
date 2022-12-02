import { showAlert, showFormattedAlert } from 'common/saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ResponseDataType } from 'type/type.recipe';
import ApiEndpoint from 'utils/api';
import { DELETE, GET, POST, PUT } from 'utils/constants';
import history from 'utils/history';
import request from 'utils/request';
import commonMessage from 'common/messages';
import { 
  assignRecipesAction,
  asyncEndAction,
  asyncStartAction, 
  clearFormFieldAction, 
  queryRecipesAction,
  setInitialValuesAction
} from './actions';
import { DELETE_ITEM_BY_ID, GET_RECIPE_BY_ID, QUERY_RECIPES, RECIPE_URL, SUBMIT_FORM } from './constants';
import { makeFormMethodSelector, makeFormValuesSelector, makeIdSelector } from './selectors';
import Common from 'utils/common';
import { sendRedirectAction } from 'containers/App/actions';

function forwardTo(location: string) {
  history.push(location);
  document.location.reload();
}

export function* handleSubmitForm() {
  yield put(asyncStartAction());
  const formValues: object = yield select(makeFormValuesSelector());
  const formMethod: string = yield select(makeFormMethodSelector());
  const id: string = yield select(makeIdSelector());
  const requestUrl = `${RECIPE_URL}/${formMethod === PUT ? `${id}` : ''}`;

  if (formMethod === PUT) {
    formValues.id = id ?? '';
  }

  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    formMethod,
    Common.trimObject(formValues),
    null,
  );
  try {
    yield call(request, payload);
    yield put(queryRecipesAction());
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    const message =
      formMethod === PUT
        ? commonMessage.updateSuccess
        : commonMessage.addSuccess;
    yield showFormattedAlert('success', message);
    yield call(forwardTo, '/manage-recipe');
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

export function* handleDeleteItemById(data: any) {
  yield put(asyncStartAction());
  const requestUrl = `${RECIPE_URL}/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    DELETE,
    null,
    null,
  );
  try {
    yield call(request, payload);
    yield put(queryRecipesAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('success', commonMessage.deleteSuccess);
  } catch (error) {
    yield put(asyncEndAction());
    yield showFormattedAlert('error', commonMessage.deleteError);
  }
}

export function* handleGetRecipeById(data: any) {
  yield put(asyncStartAction());
  const id: string = yield select(makeIdSelector());
  const requestUrl = `${RECIPE_URL}/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    GET,
    null,
    null,
  );
  try {
    const response: ResponseDataType = yield call(request, payload);
    yield put(setInitialValuesAction(response.data?.recipe));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export default function* ManageProductSaga() {
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(QUERY_RECIPES, handleQueryRecipesList);
  yield takeLatest(DELETE_ITEM_BY_ID, handleDeleteItemById);
  yield takeLatest(GET_RECIPE_BY_ID, handleGetRecipeById);
}
