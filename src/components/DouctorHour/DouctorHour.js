import React from 'react';
import styled, {css} from 'styled-components';
import {array, func, bool} from 'prop-types';

// Locals
import {
  Wrapper,
  FlatList,
  Separator,
  Text,
  EmptyText
} from '~/components/shared';
import {DoctorHourItem} from '~/components';
export const DouctorHour = ({loading, select, data}) => {
  return (
    <WrapperHour loading={loading}>
      <WrapperText>
        <FlatList
          keyExtractor={item => item.hour}
          data={data}
          horizontal={true}
          ListEmptyComponent={
            <EmptyText>Nenhum horários disponível.</EmptyText>
          }
          renderItem={item => {
            return (
              <DoctorHourItem
                key={item.hour}
                item={item.item}
                onPressSelect={select}
              />
            );
          }}
        />
      </WrapperText>
    </WrapperHour>
  );
};

DouctorHour.propTypes = {
  loading: bool,
  data: array,
  select: func.isRequired
};
const WrapperHour = styled(Wrapper)`
  ${props =>
    props.loading &&
    css`
      padding-top: 10;
      padding-bottom: 10;
      height: 80;
    `};
`;
const WrapperText = styled.View`
  background-color: #282948;
  flex: 1;
  padding-top: 10;
  padding-bottom: 10;
  height: 80;
  justify-content: center;
`;

const WrapperItem = styled.View``;
