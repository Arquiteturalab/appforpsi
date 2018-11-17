import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';
import {object, func} from 'prop-types';
import {Text, Icon} from '~/components/shared';
import {image} from '~/config';

export const ItemCarousel = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <WrapperCarousel>
        <WrapperInfo>
          <Header>
            {item.user.urlImage && (
              <ImageCarousel source={{uri: item.user.urlImage}} />
            )}
            {!item.user.urlImage && <Icon size={30} name="ios-contact" />}
          </Header>
        </WrapperInfo>
        <WrapperBody>
          <Title size={14} align="left">
            {item.user.name}
          </Title>
          <Info>
            <Icon size={17} color="#43458a" name="ios-navigate" />
            <TextLocation secondary size={10}>
              {item.district}
            </TextLocation>
          </Info>
          <Info>
            <Icon size={17} color="#43458a" name="ios-star-half" />
            <TextLocation secondary size={10}>
              5.3
            </TextLocation>
          </Info>
        </WrapperBody>
      </WrapperCarousel>
    </TouchableOpacity>
  );
};
ItemCarousel.propTypes = {
  item: object,
  onPress: func
};

const {width, height} = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};
const slideWidth = wp(40);
const itemHorizontalMargin = wp(2);

const sliderWidth = width;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const slideHeight = height * 0.3;

const ImageMenu = styled.Image`
  width: 20;
  height: 20;
`;

const WrapperCarousel = styled.View`
  width: ${itemWidth};
  height: ${slideHeight};
  background-color: #222244;
  border-radius: 8;
`;

const WrapperImage = styled.View`
  flex: 1;
  margin-bottom: 0;
  background-color: #fff;
  overflow: hidden;
`;

const ImageCarousel = styled.Image`
  height: 100px;
  width: 145px;
`;

const WrapperInfo = styled.View`
  justify-content: center;
  padding-top: 13;
  padding-horizontal: 10;
  margin-bottom: 13;
`;

const Title = Text.extend`
  text-transform: uppercase;
`;

const Subtitle = Text.extend`
  color: #a9a9a9;
  padding-top: 10;
`;

const Header = styled.View``;

const WrapperBody = styled.View`
  padding-horizontal: 10;
`;

const TextLocation = Text.extend`
  padding-left: 5;
`;
const Info = styled.View`
  padding-top: 4;
  flex-direction: row;
  align-items: center;
`;

//
