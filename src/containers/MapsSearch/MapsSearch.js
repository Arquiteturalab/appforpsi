import React from 'react';
import {Image} from 'react-native';
import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';
import {LoginManager} from 'react-native-fbsdk';
// import styled from 'styled-components/native';
// Local
import {
  Text,
  Wrapper,
  TopBar,
  Icon,
  SearchButton,
  FlatList,
  Button
} from '~/components/shared';
import {Card, MenuButton} from '~/components';

export const MapsSearch = ({card, loginFacebook}) => {
  return (
    <WrapperCards>
      <TopBar
        leftComponent={<SearchButton modal screen="Filter" />}
        rightComponent={<MenuButton />}
      />
    </WrapperCards>
  );
};

const WrapperCards = Wrapper.extend``;

const listStyle = {paddingTop: 0, paddingBottom: 0};

// http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=439390&type=card

// <FlatList
//         contentContainerStyle={listStyle}
//         keyExtractor={item => item}
//         initialNumToRender={2}
//         data={card.allIds}
//         renderItem={({item}) => {
//           return <Card card={card.byId[item]} />;
//         }}
//       />
