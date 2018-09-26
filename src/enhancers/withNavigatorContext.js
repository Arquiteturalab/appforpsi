import {withContext} from 'recompose';
import {object} from 'prop-types';

export const withNavigatorContext = withContext(
  {
    navigator: object.isRequired
  },
  ({navigator}) => ({navigator})
);
