import {getContext} from 'recompose';
import {object} from 'prop-types';

export const getNavigatorContext = getContext({
  navigator: object.isRequired
});
