import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';

export const getHistory = () => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/doctors/schedules`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['SUCCESS_HISTORY', 'HISTORY_FAILURE', 'HISTORY_ERROR']
    }
  };
};
