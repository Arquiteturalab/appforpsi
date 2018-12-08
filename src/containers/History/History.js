import React from 'react';
import styled from 'styled-components';
import {object, bool} from 'prop-types';
// Locals
import {
  Wrapper,
  TopBar,
  BackButton,
  FlatList,
  Text,
  EmptyText
} from '~/components/shared';
import {HistoryItem} from '~/components';

export const History = ({history, isLoading}) => {
  return (
    <Wrapper loading={isLoading}>
      <TopBar leftComponent={<BackButton />} title="Histórico" />
      <FlatList
        keyExtractor={item => item}
        data={history.allIds}
        ListEmptyComponent={<EmptyText>Nenhum histórico disponível.</EmptyText>}
        renderItem={item => {
          return <HistoryItem key={item} item={item} />;
        }}
      />
    </Wrapper>
  );
};

History.proptypes = {
  history: object,
  isLoading: bool
};
// const Wrapper = styled.View``;
const WrapperHour = styled(Wrapper)`
  ${props =>
    props.loading &&
    css`
      padding-top: 10;
      padding-bottom: 10;
      height: 80;
    `};
`;
