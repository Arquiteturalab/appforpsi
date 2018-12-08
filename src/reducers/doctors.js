import {forEach, cloneDeep} from 'lodash';

const INITIAL_STATE = {
  allIds: [],
  byId: {},
  selectedDoctor: {}
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
  return newState;
};
const getDoctor = (state, {payload}) => {
  const newState = {
    ...state,
    selectedDoctor: {
      ...payload.data
    }
  };
  return newState;
};

// const cancel = (state, {payload}) => {
//   const newState = {
//     ...state,
//     selectedDoctor: {
//       ...payload.data
//     }
//   }
//   console.log(newState);
// };
export const doctors = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DOCTORS_SUCCESS':
      return getDoctors(state, action);
    case 'DOCTORS_FAILURE':
      cancel(state, action);
    case 'DOCTOR_SUCCESS':
      getDoctor(state, action);
    default:
      return {...state};
  }
};
