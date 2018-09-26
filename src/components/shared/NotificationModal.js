import React from 'react';
import styled, {css} from 'styled-components/native';
import {string} from 'prop-types';
import {compose, pure, setPropTypes} from 'recompose';
import {Dimensions, Platform} from 'react-native';

//Local
import {Text} from '~/components/shared';

export const NotificationModal = compose(
  setPropTypes({
    text: string.isRequired
  }),
  pure
)(props => (
  <Modal {...props}>
    <Text inverted>{props.text}</Text>
  </Modal>
));

const Modal = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 20 : 0};
  padding-top: 10;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 10;
  min-height: 40;
  width: ${Dimensions.get('window').width};

  ${props =>
    props.danger &&
    css`
      background: ${props => props.theme.danger};
    `} ${props =>
  props.success &&
  css`
    background: ${props => props.theme.success};
  `} ${props =>
  props.warning &&
  css`
    background: ${props => props.theme.warning};
  `};
`;
