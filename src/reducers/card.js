import {forEach, cloneDeep} from 'lodash';

const INITIAL_STATE = {
  allIds: [],
  byId: {}
};

const getCards = (state, {payload}) => {
  const newState = cloneDeep(state);
  debugger;
  forEach(payload, item => {
    if (newState.allIds.indexOf(item.id) === -1) {
      newState.allIds.push(item.id);
      newState.byId[item.id] = item;
    }
  });
  return newState;
};

export const card = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS_CARD':
      return getCards(state, action);
    default:
      return {...state};
  }
};
