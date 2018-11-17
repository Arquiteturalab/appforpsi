import {compose, lifecycle, pure, withProps} from 'recompose';
import {connect} from 'react-redux';
import {getGeolocation} from '~/actions';
import {withRefs} from '~/enhancers';
export const enhancer = compose(
  withRefs,
  connect(
    ({doctors, location}) => ({doctors, location}),
    {getGeolocation}
  ),
  withProps(({getRefs}) => ({
    setAnimateToRegion: () => {}
  })),
  lifecycle({
    async componentWillMount() {
      await this.props.getGeolocation();
    }
  }),
  pure
);
