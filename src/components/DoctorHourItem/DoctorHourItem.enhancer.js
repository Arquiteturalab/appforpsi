import {compose, withProps, setPropTypes} from 'recompose';
import {object, func} from 'prop-types';

export const enhancer = compose(
  setPropTypes({
    item: object,
    onPressSelect: func.isRequired
  }),
  withProps(({item, onPressSelect}) => ({
    onPress: () => {
      if (typeof onPressSelect === 'function') {
        onPressSelect(item.hour);
      }
    }
  }))
);
