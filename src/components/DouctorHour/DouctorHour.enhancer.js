import {compose, withHandlers, pure, setPropTypes, withState} from 'recompose';
import {object, array} from 'prop-types';
import {forEach, find} from 'lodash';

export const enhancer = compose(
  setPropTypes({
    data: array
  }),
  withState('source', 'setSource', ({data}) => data),
  withHandlers({
    select: ({data, setSource}) => hour => {
      forEach(data, item => {
        item.selected = false;
      });
      let currentItem = find(data, item => item.hour === hour);
      currentItem.selected = true;
      console.log(data);
      setSource(data);
    }
  })
);
