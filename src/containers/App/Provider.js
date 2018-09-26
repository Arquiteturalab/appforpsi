import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {compose, setPropTypes} from 'recompose';
import {object, element} from 'prop-types';
import {ThemeProvider} from 'styled-components/native';

// locals
import {theme} from '~/config';

export const Provider = compose(
  setPropTypes({
    store: object.isRequired,
    children: element.isRequired
  })
)(({store, children}) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ReduxProvider>
  );
});
