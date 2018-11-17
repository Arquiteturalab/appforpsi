import {withState, compose, withProps} from 'recompose';

const withMeasurements = compose(
  withState('elementX', 'setX', 0),
  withState('elementY', 'setY', 0),
  withState('elementWidth', 'setWidth', 0),
  withState('elementHeight', 'setHeight', 0)
);

const withOnLayout = withProps(({setX, setY, setHeight, setWidth}) => ({
  onLayoutSetMeasurements: event => {
    setX(event.nativeEvent.layout.x);
    setY(event.nativeEvent.layout.y);
    setHeight(event.nativeEvent.layout.height);
    setWidth(event.nativeEvent.layout.width);
  }
}));

export const withSelfMeasure = compose(
  withMeasurements,
  withOnLayout
);
