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

export const SearchButton = compose(
  setPropTypes({
    icon: string,
    screen: string
  }),
  getNavigatorContext,
  withHandlers({
    onPress: ({navigator, screen, modal}) => () => {
      let method = modal ? 'showModal' : 'push';
      navigator[method]({
        screen,
        navigatorStyle,
        overrideBackPress: true,
        animationType: 'pop'
      });
    }
  }),
  defaultProps({
    icon: 'ios-funnel'
  }),
  pure
)(({onPress, icon}) => {
  return (
    <Button icon onPress={onPress}>
      <Icon inverted name={icon} size={18} />
    </Button>
  );
});
