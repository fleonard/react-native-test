import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { types } from '../actions';

const map = handleActions(
  {
    [types.SET_MARKERS] (state, action) {
      return { ...state, markers: action.payload };
    },
    [types.CLEAR_MARKERS] (state, action) {
      return { ...state, markers: {} };
    }
  },
  {
    markers: {}
  }
);

const reducers = combineReducers({
  map
});

export default reducers;
