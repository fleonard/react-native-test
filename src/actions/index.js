import { createActions } from 'redux-actions';

const types = {
  GET_MARKERS: 'GET_MARKERS',
  SET_MARKERS: 'SET_MARKERS',
  SET_SELECTED_MARKER: 'SET_SELECTED_MARKER',
  CLEAR_MARKERS: 'CLEAR_MARKERS',
  GET_PLACE_DETAILS: 'GET_PLACE_DETAILS',
  SET_PLACE_DETAILS: 'SET_PLACE_DETAILS',
  SET_INSTAGRAM_TOKEN: 'SET_INSTAGRAM_TOKEN',
  GET_INSTAGRAM_LOCATIONS: 'GET_INSTAGRAM_LOCATIONS',
  SET_INSTAGRAM_LOCATIONS: 'SET_INSTAGRAM_LOCATIONS',
  CLEAR_INSTAGRAM_LOCATIONS: 'CLEAR_INSTAGRAM_LOCATIONS',
  SET_INSTAGRAM_IMAGES: 'SET_INSTAGRAM_IMAGES',
  CLEAR_INSTAGRAM_IMAGES: 'CLEAR_INSTAGRAM_IMAGES'
};

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
