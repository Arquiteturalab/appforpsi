import {createStore, combineReducers, applyMiddleware} from 'redux';
import {AppState, NetInfo, AsyncStorage} from 'react-native';
import {apiMiddleware} from 'redux-api-middleware-native';
import devToolsEnhancer from 'remote-redux-devtools';
import {offline} from 'redux-offline';
import defaultConfig from 'redux-offline/lib/defaults';
import thunk from 'redux-thunk';

// locals
import {apikey} from '~/config';
import {card, user} from '~/reducers';
import {apiHeadersMiddleware} from '~/middleware';

const appReducer = combineReducers({
  card,
  user
});

export const configureStore = persistCallback => {
  const customConfig = {
    ...defaultConfig,
    detectNetwork: callback => {
      let wasOnline;
      let unsubscribe;

      const updateState = isOnline => {
        if (!unsubscribe) {
          unsubscribe = store.subscribe(updateRedux);
        }

        isOnline = store.getState().user.logged ? isOnline : false;

        if (wasOnline !== isOnline) {
          wasOnline = isOnline;
          callback(isOnline);
        }
      };

      const updateRedux = () => {
        NetInfo.isConnected.fetch().then(updateState);
      };

      NetInfo.isConnected.addEventListener('change', updateState);
      NetInfo.isConnected.fetch().then(updateState);

      AppState.addEventListener('change', () => {
        NetInfo.isConnected.fetch().then(updateState);
      });
    },
    effect: (effect, action) => {
      effect.headers = Object.assign({}, effect.headers, {
        Authorization: store.getState().user.data.token || '',
        apikey
      });

      return defaultConfig.effect(effect, action);
    },
    persistOptions: {
      storage: AsyncStorage
    },
    persistCallback
  };

  const store = offline(customConfig)(createStore)(
    appReducer,
    devToolsEnhancer(),
    applyMiddleware(apiHeadersMiddleware, apiMiddleware, thunk)
  );
  return store;
};
