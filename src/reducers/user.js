import {forEach, cloneDeep} from 'lodash';

const INITIAL_STATE = {
  data: {},
  preferences: {},
  logged: false,
  error: false
};

const login = ({payload}) => {
  console.log(payload);
  return {
    logged: true,
    data: payload.data,
    preferences: {},
    error: false
  };
};

const error = ({payload}) => {
  return {
    logged: false,
    data: payload,
    preferences: {},
    error: false
  };
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUCCESS_USER':
      return login(action);
    case 'SUCCESS_ERROR':
      return error(action);
    case 'LOGOUT_USER':
      return {...INITIAL_STATE};
    case 'LOGOUT_FAILURE':
    case 'LOGOUT_ERROR':
      return error(action);
    default:
      return state;
  }
};
