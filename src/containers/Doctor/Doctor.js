import React from 'react';
import styled from 'styled-components';
import {Animated} from 'react-native';
// import {} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {object, array, func} from 'prop-types';
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
import {DoctorDetails, DouctorHour} from '~/components';

export const Doctor = ({doctor, hours, onScroll, searchBarVisible}) => {
  return (
    <WrapperDoctor>
      <TopBarDoctor
        visible={searchBarVisible.visible}
        leftComponent={<BackButtonStyle title="Filtros" />}
      />
      <ScrollWrapper onScroll={onScroll}>
        <ImageAvatar source={{uri: doctor.user.urlImage}} />
        <Separator />
        <DoctorDetails doctor={doctor} />
        <Separator />
        <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          theme={{
            backgroundColor: '#282948',
            calendarBackground: '#282948',
            dayTextColor: '#fff',
            monthTextColor: '#fff',
            todayTextColor: '#43458a',
            selectedDayBackgroundColor: '#00adf5'
          }}
        />
        <Separator />
        <DouctorHour data={hours} />
        <Separator />
      </ScrollWrapper>
      <FooterBar>
        <Button success>
          <Text inverted>Agendamento</Text>
        </Button>
      </FooterBar>
    </WrapperDoctor>
  );
};

Doctor.propTypes = {
  doctor: object,
  hours: array,
  onScroll: func,
  searchBarVisible: object
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
