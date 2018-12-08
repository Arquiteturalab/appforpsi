import React from 'react';
import styled from 'styled-components';
import {object} from 'prop-types';

// Locals
import {Text, Icon} from '~/components/shared';

export const DoctorDetails = ({doctor}) => (
  <Details>
    <WrapperHeader>
      <Text align="left" size={20}>
        {doctor.user ? doctor.user.name : doctor.name}
      </Text>
      <WrapperIcon>
        <Icon size={22} color="#43458a" name="ios-star-half" />
        <TextLocation secondary size={18}>
          5.3
        </TextLocation>
      </WrapperIcon>
    </WrapperHeader>
    <Container>
      <Row>
        <Col>
          <Icon size={17} color="#43458a" name="ios-map" />
          <TextStyle secondary size={12}>
            {doctor.street}
          </TextStyle>
        </Col>
        <Col>
          <Icon size={17} color="#43458a" name="ios-locate" />
          <TextStyle secondary size={12}>
            {doctor.district}
          </TextStyle>
        </Col>
      </Row>
      <Row>
        <Col>
          <Icon size={17} color="#43458a" name="ios-pin" />
          <TextStyle secondary size={12}>
            {doctor.zip}
          </TextStyle>
        </Col>
      </Row>
    </Container>
  </Details>
);

DoctorDetails.propTypes = {
  doctor: object
};
const Details = styled.View`
  background-color: #282948;
  flex: 1;
  height: 100;
  padding-left: 20;
  padding-top: 10;
  padding-right: 20;
`;

const Col = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextStyle = Text.extend`
  padding-left: 5;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4;
`;

const Container = styled.View`
  padding-top: 5;
`;

const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const WrapperIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
const TextLocation = Text.extend`
  padding-left: 8;
`;
