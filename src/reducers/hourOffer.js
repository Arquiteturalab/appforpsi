import {map, cloneDeep} from 'lodash';

const INITIAL_STATE = {
  hours: []
};

const gethHours = (state, {payload}) => {
  const newState = cloneDeep(state);
  newState.hours = map(payload.data, item => ({hour: item, selected: false}));
  return newState;
};

export const hourOffer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HOURS_SUCCESS':
      return gethHours(state, action);
    case 'HOURS_FAILURE':
      console.log(action);
      return {...state};
    default:
      return {...state};
  }
};
