import {compose, withHandlers, withProps} from 'recompose';
import {connect} from 'react-redux';
import {isFunction} from 'lodash';
// Locals
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';
import {logout} from '~/actions';

export const enhancer = compose(
  getNavigatorContext,
  withProps(({onClickMenu, navigator, routeName}) => ({
    onClickMenu: () => {
      if (routeName) {
        navigator.push({
          screen: routeName,
          navigatorStyle,
          overrideBackPress: true,
          animationType: 'pop'
        });
      }

      if (isFunction(onClickMenu)) {
        onClickMenu();
      }
    }
  }))
);
