import React from 'react';
import {LoginManager} from 'react-native-fbsdk';
import styled from 'styled-components/native';
import {object, func} from 'prop-types';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {map} from 'lodash';

// Local
import {
  Text,
  Wrapper,
  TopBar,
  Icon,
  SearchButton,
  FlatList,
  Button,
  CarouselCustom
} from '~/components/shared';
import {Card, MenuButton, ItemCarousel} from '~/components';

export const MapsSearch = ({
  doctors,
  renderItem,
  registerRef,
  setRegionMaps,
  location
}) => {
  return (
    <WrapperCards>
      <MapStyle
        innerRef={maps => registerRef('maps', maps)}
        provider={PROVIDER_GOOGLE}
        followUserLocation={true}
        showsMyLocationButton={true}
        showsUserLocation={true}
        region={location}
      >
        {map(doctors.allIds, item => (
          <Marker
            key={item}
            coordinate={doctors.byId[item].location.coordinates}
          />
        ))}
      </MapStyle>
      <CarouselCustom
        data={doctors.allIds}
        renderItem={renderItem}
        onSnapToItem={setRegionMaps}
      />
      <TopBarTransparent
        leftComponent={<SearchButton modal screen="Filter" />}
        rightComponent={<MenuButton />}
      />
    </WrapperCards>
  );
};

MapsSearch.propTypes = {
  doctors: object,
  location: object,
  renderItem: func,
  setRegionMaps: func,
  registerRef: func
};

const WrapperCards = Wrapper.extend``;
const TopBarTransparent = styled(TopBar)`
  background-color: transparent;
`;

const MapStyle = styled(MapView)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;
