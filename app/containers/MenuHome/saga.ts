import { call, put, select, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import {
  assignBooksAction,
  assignDinnersAction,
  assignNewsAction,
  assignRecipesAction,
  assignToolsAction,
  asyncEndAction,
  asyncStartAction,
} from './actions';
import { GET, POST, PUT } from 'utils/constants';
import { 
  BOOK_URL,
  DINNER_URL,
  NEWS_URL,
  QUERY_BOOKS,
  QUERY_DINNERS,
  QUERY_NEWS,
  QUERY_RECIPES, 
  QUERY_TOOLS, 
  RECIPE_URL, 
  TOOL_URL
} from './constants';
import { ResponseType } from 'type/type.recipe';

export function* handleQueryRecipesList() {
  yield put(asyncStartAction());
  const requestUrl = `${RECIPE_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseType = yield call(request, payload);
    yield put(assignRecipesAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export function* handleQueryNewsList() {
  yield put(asyncStartAction());
  const requestUrl = `${NEWS_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseType = yield call(request, payload);
    yield put(assignNewsAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export function* handleQueryDinnersList() {
  yield put(asyncStartAction());
  const requestUrl = `${DINNER_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseType = yield call(request, payload);
    yield put(assignDinnersAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export function* handleQueryBooksList() {
  yield put(asyncStartAction());
  const requestUrl = `${BOOK_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseType = yield call(request, payload);
    yield put(assignBooksAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export function* handleQueryToolsList() {
  yield put(asyncStartAction());
  const requestUrl = `${TOOL_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseType = yield call(request, payload);
    yield put(assignToolsAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export default function* marketStorePageSaga() {
  yield takeLatest(QUERY_RECIPES, handleQueryRecipesList);
  yield takeLatest(QUERY_NEWS, handleQueryNewsList);
  yield takeLatest(QUERY_DINNERS, handleQueryDinnersList);
  yield takeLatest(QUERY_BOOKS, handleQueryBooksList);
  yield takeLatest(QUERY_TOOLS, handleQueryToolsList);
}
