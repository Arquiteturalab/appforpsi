import React from 'react';
import styled from 'styled-components';
import {array, func} from 'prop-types';

// Locals
import {Wrapper, FlatList, Separator, Text} from '~/components/shared';
import {DoctorHourItem} from '~/components';
export const DouctorHour = ({source, select}) => {
  return (
    <Wrapper>
      <WrapperText>
        <FlatList
          keyExtractor={item => item.hour}
          data={source}
          horizontal={true}
          renderItem={item => {
            return (
              <DoctorHourItem
                key={item.item.hour}
                item={item.item}
                onPressSelect={select}
              />
            );
          }}
        />
      </WrapperText>
    </Wrapper>
  );
};

DouctorHour.propTypes = {
  source: array,
  select: func.isRequired
};
const WrapperText = styled.View`
  background-color: #282948;
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  height: 80;
  justify-content: center;
`;

const WrapperItem = styled.View``;
