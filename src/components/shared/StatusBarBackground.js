import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

// locals
export const StatusBarBackground = styled.View.attrs({
  color: props => props.color || props.theme.bgSecondary
})`
  z-index: 1;
  height: ${Platform.OS === 'ios' ? 20 : 0};
  background-color: ${props => props.color};
`;
