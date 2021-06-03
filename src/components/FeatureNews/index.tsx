import React from 'react';
import { BlockCard } from '../';
import { StyleProp, ViewStyle } from 'react-native';
import { } from './styles';

const style: StyleProp<ViewStyle> = {
  marginVertical: 15,
}

const FeatureNews: React.FC = () => {
  return (
    <BlockCard style={style} />
  );
}

export default FeatureNews;