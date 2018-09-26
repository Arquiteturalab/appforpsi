import React from 'react';
import Video from 'react-native-video';
import styled from 'styled-components';

export const VideoNative = ({uri}) => (
  <VideStyle resizeMode="cover" source={{uri: uri}} />
);

const VideStyle = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
