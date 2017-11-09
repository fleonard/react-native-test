import { all, call, takeEvery, put } from 'redux-saga/effects';

import actions, { types } from '../actions';


function* getMarkers() {
  yield takeEvery(types.GET_MARKERS, handleGetMarkers);
}

function* handleGetMarkers(action) {
  console.log(action.payload);
  const data = yield call(() => fetch(action.payload, { method: 'get' })
  .then(res => res.json()));

  yield put(actions.clearMarkers());
  yield put(actions.setMarkers(data.results));
}

function* sagas() {
  yield all([
    getMarkers()
  ]);
}

export default sagas;
