import { all, call, takeEvery, put, select } from 'redux-saga/effects';

import actions, { types } from '../actions';


function* getMarkers() {
  yield takeEvery(types.GET_MARKERS, handleGetMarkers);
}

function* handleGetMarkers(action) {
  const data = yield call(() => fetch(action.payload, { method: 'get' })
  .then(res => res.json()));

  yield put(actions.clearMarkers());
  yield put(actions.setMarkers(data.results));
}
function* getInstagramLocations() {
  yield takeEvery(types.GET_INSTAGRAM_LOCATIONS, handleGetInstagramLocations);
}

function* handleGetInstagramLocations(action) {
  console.log(action.payload);
  const data = yield call(() => fetch(action.payload)
  .then(res => res.json()));
  const locations = data.data;

  yield put(actions.setInstagramLocations(locations));
  const { selectedMarker } = yield select(state => state.map);

  console.log('saga: ', selectedMarker, locations);
}

function* sagas() {
  yield all([
    getMarkers(),
    getInstagramLocations()
  ]);
}

export default sagas;
