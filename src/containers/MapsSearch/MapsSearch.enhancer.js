import React from 'react';
import {compose, withHandlers, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {getCard, getGeolocation} from '~/actions';

// Locals
import {getDoctors} from '~/actions';
import {ItemCarousel} from '~/components';
import {withRefs} from '~/enhancers';
import {regionFrom} from '~/utils';

export const enhancer = compose(
  withRefs,
  connect(
    ({doctors, location}) => ({doctors, location}),
    {getDoctors, getGeolocation}
  ),
  withHandlers({
    renderItem: ({doctors}) => ({item, index}) => {
      return (
        <ItemCarousel router="Doctor" item={doctors.byId[item]} index={index} />
      );
    },
    setRegionMaps: ({getRefs, doctors}) => index => {
      const doctorsId = doctors.allIds[index];
      const {maps} = getRefs();
      const {latitude, longitude} = doctors.byId[
        doctorsId
      ].location.coordinates;
      const region = regionFrom(latitude, longitude);
      maps.animateToRegion(region, 500);
    }
  }),
  lifecycle({
    async componentWillMount() {
      // console.log();      
      await this.props.getGeolocation();
      await this.props.getDoctors();
    }
  })
);
