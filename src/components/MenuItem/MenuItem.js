import React from 'react';
import styled from 'styled-components';
import {string, func} from 'prop-types';
// Locals
import {Icon, Text, Button} from '~/components/shared';

export const MenuItem = ({icon, children, routeName, modal, onClickMenu}) => (
  <Wrapper>
    <ItemButton onPress={onClickMenu}>
      <Left>
        <ItemIcon name={icon} />
        <Text>{children}</Text>
      </Left>
      {routeName && !modal && <Icon name="ios-arrow-forward" inverted />}
    </ItemButton>
  </Wrapper>
);

MenuItem.propTypes = {
  icon: string,
  onClickMenu: func
};

const Wrapper = styled.View`
  background-color: ${props => props.theme.bgSecondary};
  border: 1px solid ${props => props.theme.bg};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

const ItemButton = Button.extend`
  justify-content: space-between;
  padding-left: 20;
  padding-right: 20;
  padding-top: 20;
  padding-bottom: 20;
`;

const ItemIcon = Icon.extend`
  width: 25;
  text-align: center;
  margin-right: 20;
`;

const Left = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
