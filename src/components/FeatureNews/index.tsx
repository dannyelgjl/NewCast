import React from 'react';
import { BlockCard } from '../';
import { StyleProp, ViewStyle } from 'react-native';

const style: StyleProp<ViewStyle> = {
  marginVertical: 15,
}

interface Props {
  item: {
    id: string,
    title?: string;
    desc?: string;
    thumbnail?: string;
  }
}


const FeatureNews: React.FC<Props> = ({ item }) => {
  return (
    <BlockCard item={item} style={style} />
  );
}

export default FeatureNews;