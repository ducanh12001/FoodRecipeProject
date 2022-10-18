import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_CONTRIBUTORS } from './constants';
import {
  asyncEndAction,
  asyncStartAction,
  setContributorAction,
} from './actions';
import axios from 'axios';
import { Contributor } from '../../type/type.home';

const contribUri =
  'https://gobeam.github.io/truthy-contributors/contributors.json';

async function getContrib() {
  try {
    const response = await axios.get(contribUri);
    return response;
  } catch (error) {
    return [];
  }
}

export function* handleGetContributors() {
  yield put(asyncStartAction());
  try {
    const contributors: Contributor = yield call(getContrib);
    if (contributors?.data) {
      yield put(setContributorAction(contributors.data));
    }

    yield put(asyncEndAction());
  } catch (error: any) {
    yield put(asyncEndAction());
    //yield showAlert('error', error.data.message);
  }
}

export default function* homePageSaga() {
  yield takeLatest(GET_CONTRIBUTORS, handleGetContributors);
}
