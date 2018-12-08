import {
  compose,
  lifecycle,
  withState,
  withProps,
  withStateHandlers,
  withHandlers
} from 'recompose';
import {connect} from 'react-redux';

// Locals
import {getAddress, cancelSchedule} from '~/actions';
import {withNavigatorContext, withNotifications} from '~/enhancers';
import {navigatorStyle} from '~/config';
export const enhancer = compose(
  connect(
    ({history, address}) => ({history, address}),
    {getAddress, cancelSchedule}
  ),
  withNavigatorContext,
  withNotifications,
  withState('isLoading', 'setLoading', false),
  withStateHandlers(
    {isVisible: false},
    {
      handlerOpenModal: () => () => {
        return {isVisible: true};
      },
      handlerCloseModal: () => () => {
        return {isVisible: false};
      }
    }
  ),
  withHandlers({
    cancel: ({
      cancelSchedule,
      history,
      historyId,
      setLoading,
      handlerCloseModal,
      navigator,
      showSuccessNotification
    }) => async () => {
      setLoading(true);
      await cancelSchedule(history.byId[historyId]);
      handlerCloseModal();
      setLoading(false);
      navigator.resetTo({
        screen: 'MapsSearch',
        navigatorStyle
      });
      showSuccessNotification('Agendamento foi cancelado!');
    }
  }),
  lifecycle({
    async componentDidMount() {
      this.props.setLoading(true);
      await this.props.getAddress(
        this.props.history.byId[this.props.historyId].doctor._id
      );
      this.props.setLoading(false);
    }
  })
);
