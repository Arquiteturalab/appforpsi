import {
  compose,
  withHandlers,
  pure,
  setPropTypes,
  withState,
  lifecycle,
  withProps
} from 'recompose';
import {object, array, func, string} from 'prop-types';
import {forEach, find, isEqual, isFunction} from 'lodash';

export const enhancer = compose(
  setPropTypes({
    data: array,
    onChange: func,
    value: string
  }),
  withState('source', 'setSource', ({data}) => data),
  withHandlers({
    select: ({data, setSource, onChange, value}) => hour => {
      forEach(data, item => {
        item.selected = false;
      });
      let currentItem = find(data, item => item.hour === (hour ? hour : value));
      currentItem.selected = true;
      setSource(data);
      if (isFunction(onChange)) {
        onChange(hour);
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      // this.props.select(this.props.value);
    },
    componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.data, this.props.data)) {
        this.props.setSource(this.props.data);
      }
    }
  })
);
