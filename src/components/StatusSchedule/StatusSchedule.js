import React from 'react';
import styled from 'styled-components';
import {string, number} from 'prop-types';
// Locals
import {Text} from '~/components/shared';
export const StatusSchedule = ({status, size, align}) => (
  <Container>
    {status === 'canceled-doctor' || status === 'canceled-patient' ? (
      <Text danger size={size} align={align}>
        Cancelado
      </Text>
    ) : (
      <Text success size={size} align={align}>
        Aprovado
      </Text>
    )}
  </Container>
);

StatusSchedule.propTypes = {
  status: string,
  size: number
};

const Container = styled.View``;
