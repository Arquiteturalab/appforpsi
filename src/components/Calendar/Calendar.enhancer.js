import {
  compose,
  withProps,
  setPropTypes,
  withState,
  lifecycle
} from 'recompose';
import {isFunction, filter, map, first} from 'lodash';
import {func} from 'prop-types';
export const enhancer = compose(
  setPropTypes({
    onDayPress: func,
    onChange: func.isRequired
  }),
  withState('markedDates', 'setMarkedDates', {}),
  withProps(({onPress, markedDates, setMarkedDates, onChange}) => ({
    onDayPress: e => {
      const value = {[e.dateString]: {selected: true}};
      setMarkedDates(value);
      const valueString = first(Object.keys(value));
      if (isFunction(onPress)) {
        onPress(valueString);
      }
      if (isFunction(onChange)) {
        onChange(valueString);
      }
    }
  })),
  lifecycle({
    componentDidMount() {
      this.props.setMarkedDates({[this.props.value]: {selected: true}});
    }
  })
);
