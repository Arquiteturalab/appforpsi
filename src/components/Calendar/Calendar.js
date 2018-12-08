import React from 'react';
import styled from 'styled-components';
import {CalendarList} from 'react-native-calendars';
import {object} from 'prop-types';
// Locals
import {theme} from '~/config';
export const Calendar = props => {
  return (
    <CalendarList
      markedDates={props.markedDates}
      {...props}
      theme={themeCalendar}
    />
  );
};

const Wrapper = styled.View``;

Calendar.propTypes = {
  markedDates: object
};
const themeCalendar = {
  backgroundColor: '#ffffff',
  calendarBackground: '#282948',
  textSectionTitleColor: '#ffffff',
  todayTextColor: '#ffffff',
  monthTextColor: '#ffffff',
  selectedDayBackgroundColor: theme.success,
  selectedDayTextColor: '#ffffff',
  arrowColor: '#ffffff',
  textMonthFontSize: 16,
  monthTextColor: '#ffffff',
  todayTextColor: '#ffffff',
  dayTextColor: '#fff'
};
