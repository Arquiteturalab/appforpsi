import {map, cloneDeep, forEach, isEqual} from 'lodash';

const INITIAL_STATE = {
  allIds: [],
  byId: {}
};

const getHistory = (state, {payload}) => {
  console.log(payload);
  const newState = cloneDeep(state);
  forEach(payload.data, item => {
    console.log(!isEqual(newState.byId[item._id], item));
    if (newState.allIds.indexOf(item._id) === -1) {
      newState.allIds.push(item._id);
      newState.byId[item._id] = item;
    }
    if (!isEqual(newState.byId[item._id], item)) {
      newState.byId[item._id] = item;
    }
  });
  return newState;
};

const getError = (state, {payload}) => {
  console.log(state, payload);
};

export const history = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS_HISTORY':
      return getHistory(state, action);
    case 'SCHEDULE_FAILURE':
      return getError(state, action);
    default:
      return {...state};
  }
};
