import React from 'react';
import {object, func} from 'prop-types';
// Locals

import {Wrapper, BackButton, ScrollWrapper} from '~/components/shared';
import {TopBarMenu, MenuItem} from '~/components';

export const Menu = ({user, logout}) => (
  <Wrapper>
    <TopBarMenu user={user} />
    <ScrollWrapper>
      <MenuItem icon="ios-calendar" routeName="History">
        Histórico
      </MenuItem>
      <MenuItem icon="ios-card" routeName="Payments">
        Pagamentos
      </MenuItem>
      <MenuItem icon="ios-people" routeName="Payments">
        Convidar amigos
      </MenuItem>
      <MenuItem icon="ios-key" routeName="ChangePassword">
        Senha
      </MenuItem>
      <MenuItem onPress={logout} icon="ios-exit">
        Sair
      </MenuItem>
    </ScrollWrapper>
  </Wrapper>
);

Menu.propTypes = {
  use: object,
  logout: func
};

// <ion-icon name=""></ion-icon>
// <ion-icon name="exit"></ion-icon>
