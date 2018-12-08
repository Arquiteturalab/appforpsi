import React from 'react';
import styled, {css} from 'styled-components';
import {isNumber} from 'lodash';
import {TouchableOpacity} from 'react-native';
import {func, object} from 'prop-types';
// Locals
import {Text} from '~/components/shared';
export const DoctorHourItem = ({item, onPress}) => {
  return (
    <WrapperHourItem selected={item.selected} onPress={onPress}>
      <Text>{item.hour}</Text>
    </WrapperHourItem>
  );
};

DoctorHourItem.propTypes = {
  onPress: func.isRequired,
  item: object
};
const WrapperHourItem = styled(TouchableOpacity)`
  background-color: #43458a;
  margin-left: 10;
  margin-right: 10;
  margin-top: 10;
  margin-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  border-radius: ${props =>
    isNumber(props.borderRadius)
      ? props.borderRadius
      : props.theme.borderRadius};
  align-items: center;
  justify-content: center;
  ${props =>
    props.selected &&
    css`
      background-color: ${props => props.theme.success};
      opacity: 0.5;
    `};
`;

// <Icon size={17} color="" name="ios-navigate" />
