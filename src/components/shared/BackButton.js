import React from 'react';
import {bool, string} from 'prop-types';
import {
  compose,
  withHandlers,
  defaultProps,
  setPropTypes,
  pure
} from 'recompose';

// Locals
import {Button, Icon} from '~/components/shared';
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';

export const BackButton = compose(
  setPropTypes({
    modal: bool,
    icon: string,
    screen: string
  }),
  getNavigatorContext,
  withHandlers({
    onPress: ({navigator, modal, screen}) => () => {
      if (modal && !screen) {
        navigator.dismissModal();
      } else if (screen) {
        navigator.push({
          screen,
          navigatorStyle,
          overrideBackPress: true,
          animationType: 'pop'
        });
      } else {
        navigator.pop();
      }
    }
  }),
  defaultProps({
    icon: 'ios-arrow-back'
  }),
  pure
)(({onPress, icon}) => {
  return (
    <Button icon onPress={onPress}>
      <Icon name={icon} inverted size={22} />
    </Button>
  );
});
