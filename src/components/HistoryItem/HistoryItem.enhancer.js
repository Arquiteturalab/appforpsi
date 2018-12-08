import {compose, withHandlers} from 'recompose';
import {connect} from 'react-redux';
// Locals
import {getNavigatorContext} from '~/enhancers';
import {navigatorStyle} from '~/config';
export const enhancer = compose(
  connect(({history}) => ({history})),
  getNavigatorContext,
  withHandlers({
    onClick: ({navigator, item}) => () => {
      navigator.push({
        screen: 'HistoryDetails',
        navigatorStyle,
        passProps: {
          historyId: item.item
        },
        overrideBackPress: true,
        animationType: 'pop'
      });
    }
  })
);
