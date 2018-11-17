import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import {compose, setPropTypes} from 'recompose';
import {array, string, element, oneOfType, func} from 'prop-types';

const enhance = compose(
  setPropTypes({
    data: array.isRequired,
    renderItem: func,
    onSnapToItem: func.isRequired
  })
);

export const CarouselCustom = enhance(({data, renderItem, onSnapToItem}) => {
  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      itemWidth={itemWidth}
      itemHeight={height}
      sliderWidth={sliderWidth}
      inactiveSlideScale={0.8}
      inactiveSlideOpacity={0.7}
      onSnapToItem={onSnapToItem}
      activeSlideOffset={10}
      containerCustomStyle={{
        position: 'absolute',
        bottom: 20
      }}
    />
  );
});

const {width, height} = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};

const slideWidth = wp(40);
const itemHorizontalMargin = wp(2);
const sliderWidth = width;
const itemWidth = slideWidth + itemHorizontalMargin;
const slideHeight = height * 0.3;
