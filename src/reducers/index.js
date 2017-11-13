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

const instagram = handleActions(
  {
    [types.SAVE_INSTAGRAM_TOKEN] (state, action) {
      return { ...state, authToken: action.payload };
    }
  },
  {
    authToken: null
  }
);

const reducers = combineReducers({
  map,
  instagram
});

export default reducers;
