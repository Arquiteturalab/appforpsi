import React from 'react';
import styled from 'styled-components/native';
import {oneOfType, element, string, bool} from 'prop-types';
import {compose, pure, setPropTypes, withProps} from 'recompose';
import {isNumber} from 'lodash';

// locals
import {Text, StatusBarBackground} from '~/components/shared';

export const TopBar = compose(
  setPropTypes({
    leftComponent: oneOfType([element, string]),
    rightComponent: element,
    title: string,
    logo: bool
  }),
  withProps(({notEmpty}) => ({
    notEmpty: isNumber(notEmpty) ? notEmpty : true
  })),
  pure
)(({leftComponent, title, logo, rightComponent, notEmpty}) => (
  <MainWrapper>
    <StatusBarBackground />
    <Wrapper>
      {leftComponent === 'hidden' ? <Wrapper /> : leftComponent}
      <Title>{title}</Title>
      {!!notEmpty && rightComponent}
    </Wrapper>
  </MainWrapper>
));

const MainWrapper = styled.View`
  z-index: 2;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgSecondary};
  padding-left: 20;
  padding-right: 20;
  border-width: 1;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-color: ${props => props.theme.bgSecondary};
  min-height: 43;
`;

const Title = Text.extend`
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  width: 110;
  margin-left: -45;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.textInverted};
`;

const Image = styled.Image`
  resize-mode: contain;
  position: absolute;
  left: 50%;
  width: 110;
  height: 53;
  margin-left: -45;
`;
