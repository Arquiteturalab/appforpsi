import {compose, lifecycle, withState} from 'recompose';
import {connect} from 'react-redux';
// Locals

import {getHistory} from '~/actions';
export const enhancer = compose(
  connect(
    ({history}) => ({history}),
    {getHistory}
  ),
  withState('isLoading', 'setLoading', false),
  lifecycle({
    async componentDidMount() {
      this.props.setLoading(true);
      await this.props.getHistory();
      this.props.setLoading(false);
    }
  })
);
