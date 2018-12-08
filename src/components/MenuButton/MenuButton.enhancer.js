import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';
// locals
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';

export const enhancer = compose(
  connect(({user}) => ({user})),
  getNavigatorContext,
  withHandlers({
    onPress: ({navigator, user}) => () => {
      const screen = user.logged ? 'Menu' : 'Information';
      navigator.showModal({
        screen: screen,
        navigatorStyle,
        overrideBackPress: true,
        animationType: 'pop'
      });
    }
  })
);
