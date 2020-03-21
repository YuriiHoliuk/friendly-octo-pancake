import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import {
  recievCategories,
  recievFilters,
  finishLoading,
  ACTION_TYPES,
} from '../store/actions';

import { fetchCategories, fetchFilters } from '../api';

function* getApiFilters() {
  try {
    const filters = yield call(fetchFilters);
    yield put(recievFilters(filters));
  } catch (e) {
    console.log(e);
  }
}

function* getApiCategories() {
  try {
    const filters = [
      { url: 'https://api.github.com/repos/Vladyslav223/react_uber-eats' },
      { url: 'https://api.github.com/repos/Vladyslav223/portfolio_layout_dia' },
      { url: 'https://api.github.com/repos/Vladyslav223/js_test' },
    ];
    const data = yield call(() => fetchCategories(filters));
    yield put(recievCategories(data));
  } catch (e) {
    console.log(e);
  }
}

function* finishLoadingCategories() {
  yield put(finishLoading());
}

export default function* mySaga() {
  yield takeEvery(ACTION_TYPES.START_LOADING, getApiFilters);
  yield takeEvery(ACTION_TYPES.RECEIVE_FILTERS, getApiCategories);
  yield takeEvery(ACTION_TYPES.RECEIVE_CATEGORIES, finishLoadingCategories);
}
