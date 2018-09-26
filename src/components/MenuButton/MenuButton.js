import React from 'react';
// import styled from 'styled-components';
import {func} from 'prop-types';

// Locais
import {Button, Icon} from '~/components/shared';

export const MenuButton = ({onPress}) => (
  <Button icon onPress={onPress}>
    <Icon inverted name="ios-contact" size={22} />
  </Button>
);

MenuButton.propTypes = {
  onPress: func.isRequired
};

// const Wrapper = styled.View``;
