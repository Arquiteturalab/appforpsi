import React from 'react';
import {Image as ImageNative} from 'react-native';
import styled, {css} from 'styled-components/native';
import {CachedImage, ImageCacheProvider} from 'react-native-cached-image';

export const Image = styled(CachedImage).attrs({
  resizeMethod: 'resize'
})``;
