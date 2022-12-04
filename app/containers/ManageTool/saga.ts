import { showAlert, showFormattedAlert } from 'common/saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ResponseDataType } from 'type/type.recipe';
import ApiEndpoint from 'utils/api';
import { DELETE, GET, PUT } from 'utils/constants';
import history from 'utils/history';
import request from 'utils/request';
import commonMessage from 'common/messages';
import { 
  assignToolsAction,
  asyncEndAction,
  asyncStartAction, 
  clearFormFieldAction, 
  queryToolsAction,
  setInitialValuesAction
} from './actions';
import { DELETE_ITEM_BY_ID, GET_TOOL_BY_ID, QUERY_TOOLS, SUBMIT_FORM, TOOL_URL } from './constants';
import { makeFormMethodSelector, makeFormValuesSelector, makeIdSelector } from './selectors';
import Common from 'utils/common';

function forwardTo(location: string) {
  history.push(location);
  document.location.reload();
}

export function* handleSubmitForm() {
  yield put(asyncStartAction());
  const formValues: object = yield select(makeFormValuesSelector());
  const formMethod: string = yield select(makeFormMethodSelector());
  const id: string = yield select(makeIdSelector());
  const requestUrl = `${TOOL_URL}/${formMethod === PUT ? `${id}` : ''}`;

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
    yield put(queryToolsAction());
    yield put(clearFormFieldAction());
    yield put(asyncEndAction());
    const message =
      formMethod === PUT
        ? commonMessage.updateSuccess
        : commonMessage.addSuccess;
    yield showFormattedAlert('success', message);
    yield call(forwardTo, '/manage-tool');
  } catch (error: any) {
    yield put(asyncEndAction());
    yield showAlert('error', error.data.message);
  }
}

export function* handleQueryToolsList() {
  yield put(asyncStartAction());
  const requestUrl = `${TOOL_URL}`;
  const payload = ApiEndpoint.makeApiPayload(requestUrl, GET, null, null);
  try {
    const response: ResponseDataType = yield call(request, payload);
    yield put(assignToolsAction(response));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export function* handleDeleteItemById(data: any) {
  yield put(asyncStartAction());
  const requestUrl = `${TOOL_URL}/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    DELETE,
    null,
    null,
  );
  try {
    yield call(request, payload);
    yield put(queryToolsAction());
    yield put(asyncEndAction());
    yield showFormattedAlert('success', commonMessage.deleteSuccess);
  } catch (error) {
    yield put(asyncEndAction());
    yield showFormattedAlert('error', commonMessage.deleteError);
  }
}

export function* handleGetToolById(data: any) {
  yield put(asyncStartAction());
  const id: string = yield select(makeIdSelector());
  const requestUrl = `${TOOL_URL}/${data.id}`;
  const payload = ApiEndpoint.makeApiPayload(
    requestUrl,
    GET,
    null,
    null,
  );
  try {
    const response: ResponseDataType = yield call(request, payload);
    yield put(setInitialValuesAction(response.data));
    yield put(asyncEndAction());
  } catch (error) {
    yield put(asyncEndAction());
  }
}

export default function* ManageProductSaga() {
  yield takeLatest(SUBMIT_FORM, handleSubmitForm);
  yield takeLatest(QUERY_TOOLS, handleQueryToolsList);
  yield takeLatest(DELETE_ITEM_BY_ID, handleDeleteItemById);
  yield takeLatest(GET_TOOL_BY_ID, handleGetToolById);
}
