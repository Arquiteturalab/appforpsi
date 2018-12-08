import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';

export const getDoctors = () => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/opsico-api-user/v1/doctors`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['DOCTORS_SUCCESS', 'DOCTORS_FAILURE', 'DOCTORS_ERROR']
    }
  };
};

export const getDoctor = doctorId => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/doctors/${doctorId}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['DOCTOR_SUCCESS', 'DOCTOR_FAILURE', 'DOCTOR_ERROR']
    }
  };
};
