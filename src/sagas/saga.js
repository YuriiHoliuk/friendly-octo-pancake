import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import {
  recievCategories,
  finishLoading,
  ACTION_TYPES,
} from '../store/actions';

import { fetchCategories } from '../api';
import repos from './repos';

function* getApiCategories() {
  const localProjects = localStorage.getItem('localProjects');
  if (!localProjects) {
    try {
      const data = yield call(() => fetchCategories(repos));
      yield put(recievCategories(data));
      yield localStorage.setItem('localProjects', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }
  const data = JSON.parse(localStorage.localProjects);
  console.log(data);
  yield put(recievCategories(data));
}

function* finishLoadingCategories() {
  yield put(finishLoading());
}

export default function* mySaga() {
  yield takeEvery(ACTION_TYPES.START_LOADING, getApiCategories);
  yield takeEvery(ACTION_TYPES.RECEIVE_CATEGORIES, finishLoadingCategories);
}
