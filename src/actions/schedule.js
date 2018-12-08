import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';

export const saveSchedule = schedule => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/doctors/schedule`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: schedule,
      types: ['SUCCESS_SCHEDULE', 'SCHEDULE_FAILURE', 'SCHEDULE_ERROR']
    }
  };
};

export const cancelSchedule = schedule => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/doctors/schedules/cancel`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: schedule,
      types: [
        'SUCCESS_SCHEDULE_CANCEL',
        'SCHEDULE_CANCEL_FAILURE',
        'SCHEDULE_CANCEL_ERROR'
      ]
    }
  };
};
