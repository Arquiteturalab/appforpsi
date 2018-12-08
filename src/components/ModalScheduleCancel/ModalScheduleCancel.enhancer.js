import {compose, withProps} from 'recompose';
import {isFunction} from 'lodash';

export const enhancer = compose(
  withProps(({onClose, onCancel}) => ({
    onClose: () => {
      if (isFunction(onClose)) {
        onClose();
      }
    },
    onCancel: () => {
      if (isFunction(onCancel)) {
        onCancel();
      }
    }
  }))
);
