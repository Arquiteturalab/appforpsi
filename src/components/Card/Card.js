import React from 'react';
import styled from 'styled-components/native';
import {object} from 'prop-types';
import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';
// Local
import {Text, Icon, Image} from '~/components/shared';

export const Card = ({card}) => {
  console.log(card.imageUrl);
  return (
    <WrapperInfo>
      <WrapperCotent>
        <WrapperAvatar>
          <CachedImage
            style={{
              width: 50,
              height: 50
            }}
            source={{uri: card.imageUrl}}
          />
        </WrapperAvatar>
        <WrapperDescription>
          <Text size={16} weight="700">
            {card.name}
          </Text>
          <Text size={14} secondary>
            {card.rarity}
          </Text>
        </WrapperDescription>
      </WrapperCotent>
    </WrapperInfo>
  );
};
Card.propTypes = {
  card: object
};

const Wrapper = styled.View`
  background: #40495e;
  height: 80px;
  border-radius: 5;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-top: 5;
  margin-bottom: 5;
`;

// <ion-icon name="logo-apple"></ion-icon>

const WrapperInfo = styled.View`
  margin-top: 5;
  margin-bottom: 5;
`;

const Avatar = Image.extend`
  width: 50;
  height: 50;
  border-radius: 25;
`;

const WrapperAvatar = styled.View`
  padding-right: 10;
`;

const WrapperCotent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  padding-left: 10;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 10;
`;
const WrapperDescription = styled.View`
  flex-wrap: wrap;
  flex: 1;
`;
