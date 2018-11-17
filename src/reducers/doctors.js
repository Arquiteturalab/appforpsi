import {forEach, cloneDeep} from 'lodash';

const INITIAL_STATE = {
  allIds: [],
  byId: {}
};

const getDoctors = (state, {payload}) => {
  const newState = cloneDeep(state);
  forEach(payload.data, item => {
    if (newState.allIds.indexOf(item._id) === -1) {
      newState.allIds.push(item._id);
      const coordinates = {
        latitude: item.location.coordinates[0],
        longitude: item.location.coordinates[1]
      };
      item.location.coordinates = coordinates;
      newState.byId[item._id] = item;
    }
  });
  console.log(newState);
  return newState;
};

export const doctors = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DOCTORS_SUCCESS':
      return getDoctors(state, action);
    default:
      return {...state};
  }
};
