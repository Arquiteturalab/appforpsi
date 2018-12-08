import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';

export const getHoursByDate = (doctorId, date) => {
  console.log(date);
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/doctors/${doctorId}/schedule/${date}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['HOURS_SUCCESS', 'HOURS_FAILURE', 'HOURS_ERROR']
    }
  };
};
