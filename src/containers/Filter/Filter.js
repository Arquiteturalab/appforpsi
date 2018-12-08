import React from 'react';
// import {} from 'style'
// Locals
import {Wrapper, TopBar, BackButton} from '~/components/shared';

export const Filter = () => (
  <Wrapper>
    <TopBar
      title="Filtros"
      leftComponent={<BackButton modal={true} icon="ios-arrow-down" />}
    />
  </Wrapper>
);
