import { call, put, select, takeLatest } from 'redux-saga/effects';
import ApiEndpoint from 'utils/api';
import request from 'utils/request';
import { GET, PUT } from 'utils/constants';
import Common from 'utils/common';
import { QUERY_RECIPES } from './constants';
import { assignRecipesAction, asyncEndAction, asyncStartAction } from './actions';
import { RecipeType } from 'type/type.recipe';
import { RECIPE_URL } from 'containers/RecipeHome/constants';

export function* handleQueryRecipesList() {
    yield put(asyncStartAction());
    const requestUrl = `${RECIPE_URL}`;
    const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
    try {
      const response: RecipeType = yield call(request, payload);
      yield put(assignRecipesAction(response));
      yield put(asyncEndAction());
    } catch (error) {
      yield put(asyncEndAction());
    }
  }

export default function* marketStorePageSaga() {
    yield takeLatest(QUERY_RECIPES, handleQueryRecipesList);
}
