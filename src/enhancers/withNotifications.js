import {object} from 'prop-types';
import {compose, setPropTypes, withProps} from 'recompose';

export const withNotifications = compose(
  setPropTypes({
    navigator: object.isRequired
  }),
  withProps(({navigator}) => ({
    showNotification: props => {
      navigator.dismissInAppNotification();
      navigator.showInAppNotification(props);
    },
    showErrorNotification: text => {
      navigator.dismissInAppNotification();
      navigator.showInAppNotification({
        screen: 'NotificationModal',
        passProps: {
          danger: true,
          text
        },
        autoDimissTimerSec: 1
      });
    },
    showSuccessNotification: text => {
      navigator.dismissInAppNotification();
      navigator.showInAppNotification({
        screen: 'NotificationModal',
        passProps: {
          success: true,
          text
        },
        autoDimissTimerSec: 1
      });
    },
    showWarningNotification: text => {
      navigator.dismissInAppNotification();
      navigator.showInAppNotification({
        screen: 'NotificationModal',
        passProps: {
          warning: true,
          text
        },
        autoDimissTimerSec: 1
      });
    }
  }))
);
