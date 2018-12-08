import {compose, withHandlers, setPropTypes} from 'recompose';
import {getNavigatorContext} from '~/enhancers';
import {string, object} from 'prop-types';
import {TouchableOpacity, Dimensions} from 'react-native';

export const enhancer = compose(
  setPropTypes({
    router: string.isRequired,
    item: object
  }),
  getNavigatorContext,
  withHandlers({
    onPress: ({navigator, router, item}) => () => {
      navigator.showModal({
        screen: router,
        animated: true,
        animationType: 'slide-up',
        passProps: {
          doctor: item
        },
        navigatorStyle: {
          navBarHidden: true
        }
      });
    }
  })
);
