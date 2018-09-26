import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';

// Locals
import {logout} from '~/actions';
import {getNavigatorContext} from '~/enhancers';
export const enhancer = compose(
  connect(
    ({user}) => ({user}),
    {logout}
  ),
  getNavigatorContext,
  withHandlers({
    logout: ({logout, navigator}) => async () => {
      await logout();
      navigator.dismissModal();
    }
  })
);
