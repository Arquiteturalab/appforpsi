import React from 'react';
import styled from 'styled-components/native';

export const FooterBar = styled.View`
  background-color: ${props => props.theme.bgSecondary};
  shadow-color: #000;
  shadow-radius: 2px;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.1;
  elevation: 2;
  padding-top: 20;
  padding-bottom: 20;
  padding-right: 20;
  padding-left: 20;
  position: absolute;
  width: 100%;
  bottom: 0;
`;
