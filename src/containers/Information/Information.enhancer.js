import {compose, withHandlers} from 'recompose';

// Locals
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';

export const enhancer = compose(
  getNavigatorContext,
  withHandlers({
    handlerOpenRegister: ({navigator}) => () => {
      navigator.push({
        screen: 'Register',
        navigatorStyle,
        animationType: 'pop'
      });
    },
    handlerOpenLogin: ({navigator}) => () => {
      navigator.push({
        screen: 'Login',
        navigatorStyle,
        animationType: 'pop'
      });
    }
  })
);
