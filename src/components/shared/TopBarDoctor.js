import React from 'react';
import {Animated, Platform} from 'react-native';
import styled from 'styled-components/native';
import {oneOfType, element, string, bool} from 'prop-types';
import {
  compose,
  pure,
  setPropTypes,
  withProps,
  withState,
  lifecycle
} from 'recompose';
import {isNumber} from 'lodash';

// locals
import {Text, StatusBarBackground} from '~/components/shared';

export const TopBarDoctor = compose(
  withState('translateY', 'setTranslateY', new Animated.Value(0)),
  setPropTypes({
    leftComponent: oneOfType([element, string]),
    rightComponent: element,
    title: string,
    logo: bool,
    visible: bool
  }),
  withProps(({notEmpty}) => ({
    notEmpty: isNumber(notEmpty) ? notEmpty : true
  })),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        if (nextProps.visible) {
          Animated.timing(this.props.translateY, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true
          }).start();
        } else {
          Animated.timing(this.props.translateY, {
            toValue: 200,
            duration: 250,
            useNativeDriver: true
          }).start();
        }
      }
    }
  }),
  pure
)(({leftComponent, title, logo, rightComponent, notEmpty, translateY}) => {
  const interpolate = translateY.interpolate({
    inputRange: [0, 150],
    outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
  });

  const animated = {
    backgroundColor: interpolate
  };

  return (
    <MainWrapper>
      <StatusBarBackground />
      <Animated.View style={[animated]} />
      <Wrapper>
        {leftComponent === 'hidden' ? <Wrapper /> : leftComponent}
        <Title inverted>{title}</Title>
        {!!notEmpty && rightComponent}
      </Wrapper>
    </MainWrapper>
  );
});

const MainWrapper = styled.View`
  z-index: 2;
`;

const Wrapper = styled(Animated.View)`
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding-left: 20;
  padding-right: 20;
  top: ${Platform.OS === 'ios' ? 30 : 10};
  width: 100%;
  border-bottom-color: ${props => props.theme.bgSecondary};
`;

const Title = Text.extend`
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  width: 110;
  margin-left: -45;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.textInverted};
`;

const Image = styled.Image`
  resize-mode: contain;
  position: absolute;
  left: 50%;
  width: 110;
  height: 53;
  margin-left: -45;
`;
