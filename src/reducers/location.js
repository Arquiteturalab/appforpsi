import {cloneDeep} from 'lodash';

// Locals
import {regionFrom} from '~/utils';

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0
};

const getGeoLocation = (state, {payload}) => {
  const {latitude, longitude} = payload;
  return regionFrom(latitude, longitude);
};

export const location = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_GEOLOCATION':
      return getGeoLocation(state, action);
    default:
      return {...state};
  }
};
