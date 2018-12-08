import {map, cloneDeep} from 'lodash';

const INITIAL_STATE = {};

const saveSchedule = (state, {payload}) => {
  const newState = cloneDeep(state);
  return newState;
};

const getError = (state, {payload}) => {
  console.log(state, payload);
};

export const schedule = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS_SCHEDULE':
      return saveSchedule(state, action);
    case 'SCHEDULE_FAILURE':
      return getError(state, action);
    default:
      return {...state};
  }
};
