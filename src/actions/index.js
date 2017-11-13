import { createActions } from 'redux-actions';

const types = {
  GET_MARKERS: 'GET_MARKERS',
  SET_MARKERS: 'SET_MARKERS',
  CLEAR_MARKERS: 'CLEAR_MARKERS',
  'SAVE_INSTAGRAM_TOKEN': 'SAVE_INSTAGRAM_TOKEN'
};

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };
