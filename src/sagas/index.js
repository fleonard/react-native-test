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

function* getPlaceDetails() {
  yield takeEvery(types.GET_PLACE_DETAILS, handleGetPlaceDetails);
}

function* handleGetPlaceDetails(action) {
  const data = yield call(() => fetch(action.payload, { method: 'get' })
  .then(res => res.json()));

  yield put(actions.setPlaceDetails(data.result));
}

function* getInstagramLocations() {
  yield takeEvery(types.GET_INSTAGRAM_LOCATIONS, handleGetInstagramLocations);
}

function* handleGetInstagramLocations(action) {
  const data = yield call(() => fetch(action.payload)
  .then(res => res.json()));
  const locations = data.data;

  yield put(actions.setInstagramLocations(locations));
  const { selectedMarker } = yield select(state => state.map);
}

function* sagas() {
  yield all([
    getMarkers(),
    getPlaceDetails(),
    getInstagramLocations()
  ]);
}

export default sagas;
