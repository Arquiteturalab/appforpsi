import {compose, withHandlers} from 'recompose';

// Locals
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';

export const enhancer = compose(
  getNavigatorContext,
  withHandlers({
    handlerOpenRegister: ({navigator}) => e => {
      navigator.push({
        screen: 'Register',
        navigatorStyle,
        animationType: 'pop',
        passProps: {
          type: e
        }
      });
    },
    handlerOpenLogin: ({navigator}) => e => {
      navigator.push({
        screen: 'Login',
        navigatorStyle,
        animationType: 'pop',
        passProps: {
          type: e
        }
      });
    }
  })
);
