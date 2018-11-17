import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styled from 'styled-components';
import {map} from 'lodash';
import {array, object, func} from 'prop-types';

export const Maps = props => {
  return (
    <MapStyle
      innerRef={maps => props.registerRef('maps', maps)}
      provider={PROVIDER_GOOGLE}
      followUserLocation={true}
      showsMyLocationButton={true}
      showsUserLocation={true}
      region={props.location}
    >
      {map(props.source, item => (
        <Marker
          key={item}
          coordinate={props.doctors.byId[item].location.coordinates}
        />
      ))}
    </MapStyle>
  );
};

Maps.propTypes = {
  source: array,
  doctors: object,
  location: object,
  registerRef: func
};

const MapStyle = styled(MapView)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;
