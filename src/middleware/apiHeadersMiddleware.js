import {CALL_API} from 'redux-api-middleware-native';

import {apikey} from '~/config';

export const apiHeadersMiddleware = store => next => action => {
  const callApi = action[CALL_API];

  if (callApi) {
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization: store.getState().user.data.token
        ? `Bearer ${store.getState().user.data.token}`
        : '',
      apikey
    });
  }

  return next(action);
};
