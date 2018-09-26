import {AppState} from 'react-native';

export const onAppResume = callback => {
  let oldState = 'active';

  AppState.addEventListener('change', nextAppState => {
    if (oldState.match(/inactive|background/) && nextAppState === 'active') {
      callback();
    }

    oldState = nextAppState;
  });
};
