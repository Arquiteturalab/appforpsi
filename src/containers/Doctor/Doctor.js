import React from 'react';
import styled from 'styled-components';
import {Animated} from 'react-native';
// import {} from 'react-native';
import {object, array, func, string, bool} from 'prop-types';
// Locals
import {
  Wrapper,
  TopBarDoctor,
  BackButton,
  ScrollWrapper,
  FooterBar,
  Button,
  Text
} from '~/components/shared';
import {DoctorDetails, DouctorHour, Calendar} from '~/components';

export const Doctor = ({
  doctor,
  hour,
  searchBarVisible,
  date,
  setDate,
  getHour,
  hourOffer,
  onChangeHours,
  onSchedule,
  isLoading,
  isLoadingHour
}) => {
  return (
    <WrapperDoctor loading={isLoading}>
      <TopBarDoctor
        visible={searchBarVisible.visible}
        leftComponent={
          <BackButtonStyle modal title="Filtros" icon="ios-arrow-down" />
        }
      />
      <ScrollWrapper>
        <ImageAvatar source={{uri: doctor.user.urlImage}} />
        <Separator />
        <DoctorDetails doctor={doctor} />
        <Separator />
        <Calendar
          onPress={getHour}
          onChange={e => setDate(e)}
          horizontal={true}
          pagingEnabled={true}
          value={date}
        />
        <Separator />
        <DouctorHour
          loading={isLoadingHour}
          onChange={onChangeHours}
          value={'08:00'}
          data={hourOffer.hours}
        />
        <Separator />
      </ScrollWrapper>
      <FooterBar>
        <Button onPress={onSchedule} disabled={!date || !hour} success>
          <Text inverted>Agendamento</Text>
        </Button>
      </FooterBar>
    </WrapperDoctor>
  );
};

Doctor.propTypes = {
  getHour: func.isRequired,
  doctor: object,
  onScroll: func,
  searchBarVisible: object,
  date: string,
  hourOffer: object,
  onChangeHours: func.isRequired,
  hour: string.isRequired,
  onSchedule: func.isRequired,
  isLoading: bool,
  isLoadingHour: bool
};
const WrapperDoctor = Wrapper.extend`
  padding-bottom: 80;
`;
const ImageAvatar = styled.Image`
  flex: 1;
  height: 300;
`;

const BackButtonStyle = styled(BackButton)`
  z-index: 1000;
`;

const Separator = styled.View`
  margin-top: 5;
  margin-bottom: 5;
`;
