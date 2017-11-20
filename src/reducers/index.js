import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

import { types } from '../actions';

const map = handleActions(
  {
    [types.SET_MARKERS] (state, action) {
      return { ...state, markers: action.payload };
    },
    [types.CLEAR_MARKERS] (state) {
      return { ...state, markers: {} };
    },
    [types.SET_SELECTED_MARKER] (state, action) {
      return { ...state, selectedMarker: action.payload };
    }
  },
  {
    markers: {},
    selectedMarker: ''
  }
);

const instagram = handleActions(
  {
    [types.SET_INSTAGRAM_TOKEN] (state, action) {
      return { ...state, authToken: action.payload };
    },
    [types.SET_INSTAGRAM_LOCATIONS] (state, action) {
      return { ...state, locations: action.payload };
    },
    [types.CLEAR_INSTAGRAM_LOCATIONS] (state) {
      return { ...state, locations: [] };
    },
    [types.SET_INSTAGRAM_IMAGES] (state, action) {
      return { ...state, images: action.payload };
    },
    [types.CLEAR_INSTAGRAM_IMAGES] (state) {
      return { ...state, images: [] };
    }
  },
  {
    authToken: null,
    locations:[],
    images:[]
  }
);

const reducers = combineReducers({
  map,
  instagram
});

export default reducers;
