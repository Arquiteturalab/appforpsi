import React from 'react';
import {compose} from 'recompose';
import {Animated, Text} from 'react-native';
import styled from 'styled-components';
// Locals
import {buildTransform} from '~/utils';
import {withSelfMeasure} from '~/enhancers';

export const TextCustom = ({
  animationRange,
  elementX,
  elementY,
  elementHeight,
  elementWidth
}) => {
  const animateText = buildTransform(
    animationRange,
    elementX,
    elementY,
    elementHeight,
    elementWidth,
    20,
    70,
    0.7
  );
  const animateOpacity = {
    opacity: animationRange.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 1]
    })
  };

  return (
    <TextAnimated
      style={[TextAnimated, animateText, animateOpacity]}
      onLayout={event => onLayoutSetMeasurements(event)}
    >
      This is Animated Text
    </TextAnimated>
  );
};

const TextAnimated = styled(Animated.Text)`
  color: ${props => props.text};
  font-size: 20;
  font-weight: 'bold';
`;

const enhancer = withSelfMeasure;
export const AnimatedText = enhancer(TextCustom);
