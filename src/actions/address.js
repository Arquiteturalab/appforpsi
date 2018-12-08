import {CALL_API} from 'redux-api-middleware-native';

import {apiUrl, apikey} from '~/config';

export const getAddress = id => {
  return {
    [CALL_API]: {
      endpoint: `${apiUrl}/opsico-api-user/address/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      types: ['ADDRESS_SUCCESS', 'ADDRESS_FAILURE', 'ADDRESS_ERROR']
    }
  };
};
