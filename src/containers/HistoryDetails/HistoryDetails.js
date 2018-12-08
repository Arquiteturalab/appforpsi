import React from 'react';
import styled from 'styled-components';
import {string, object, bool, func} from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
// Locals

import {
  Wrapper,
  TopBar,
  BackButton,
  ScrollWrapper,
  Text,
  Icon,
  FooterBar,
  Button
} from '~/components/shared';
import {DoctorDetails, StatusSchedule, ModalScheduleCancel} from '~/components';

export const HistoryDetails = ({
  historyId,
  history,
  isLoading,
  address,
  handlerOpenModal,
  isVisible,
  handlerCloseModal,
  cancel
}) => {
  return (
    <Wrapper loading={isLoading}>
      <TopBar title="Detalhes" leftComponent={<BackButton />} />
      <ScrollWrapper>
        <WrapperHour>
          <WrapperStatus>
            <StatusSchedule
              size={12}
              status={history.byId[historyId].status}
              align="left"
            />
            <Detail>
              <ItemIcon size={23} color="#43458a" name="ios-calendar" />
              <Text align="left">
                {moment(history.byId[historyId].date)
                  .utc()
                  .format('DD/MM/YYYY')}
              </Text>
            </Detail>
          </WrapperStatus>
          <Detail>
            <ItemIcon
              size={23}
              color="#43458a"
              name="ios-information-circle-outline"
            />
            <Text align="left">{history.byId[historyId].hour}</Text>
          </Detail>
        </WrapperHour>
        <Separation />
        <Details>
          <WrapperHeader>
            <Text align="left" size={20}>
              {history.byId[historyId].doctor.name}
            </Text>
          </WrapperHeader>
          <Container>
            <Row>
              <Col>
                <Icon size={17} color="#43458a" name="ios-map" />
                <TextStyle secondary size={12}>
                  {address.data.street}
                </TextStyle>
              </Col>
              <Col>
                <Icon size={17} color="#43458a" name="ios-locate" />
                <TextStyle secondary size={12}>
                  {address.data.district}
                </TextStyle>
              </Col>
            </Row>
            <Row>
              <Col>
                <Icon size={17} color="#43458a" name="ios-pin" />
                <TextStyle secondary size={12}>
                  {address.data.zip}
                </TextStyle>
              </Col>
            </Row>
          </Container>
        </Details>
      </ScrollWrapper>
      {history.byId[historyId].status === 'aprovate' && (
        <FooterBar>
          <Button danger onPress={() => handlerOpenModal()}>
            <Text inverted>Cancelamento</Text>
          </Button>
        </FooterBar>
      )}
      <ModalScheduleCancel
        transparent={true}
        visible={isVisible}
        animationType="slide"
        onClose={handlerCloseModal}
        onCancel={cancel}
      />
    </Wrapper>
  );
};

HistoryDetails.propTypes = {
  historyId: string,
  history: object,
  isLoading: bool,
  address: object,
  handlerOpenModal: func.isRequired,
  isVisible: bool,
  handlerCloseModal: func.isRequired,
  cancel: func.isRequired
};

const Details = styled.View`
  background-color: #282948;
  flex: 1;
  height: 100;
  padding-left: 20;
  padding-top: 10;
  padding-right: 20;
`;

const Separation = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;
const WrapperHour = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #282948;
  padding-left: 20;
  padding-top: 10;
  padding-bottom: 10
  padding-right: 20;
  justify-content: space-between;
`;

const ItemIcon = Icon.extend`
  margin-right: 5;
`;

const Detail = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WrapperStatus = styled.View``;

const WrapperHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.View`
  padding-top: 5;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 4;
`;

const Col = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextStyle = Text.extend`
  padding-left: 5;
`;
