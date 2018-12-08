import {map, cloneDeep, forEach} from 'lodash';

const INITIAL_STATE = {
  data: {}
};

const getAddress = (state, {payload}) => {
  console.log(payload);
  const newState = cloneDeep(state);
  newState.data = payload.data;
  console.log(newState);
  return newState;
};

export const address = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDRESS_SUCCESS':
      return getAddress(state, action);
    default:
      return {...state};
  }
};
