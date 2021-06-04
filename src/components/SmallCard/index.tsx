import React from 'react';
import { BlockCard, ViewMore } from '../';
import { StyleProp, ViewStyle, Dimensions } from 'react-native';
import { Props } from './types';

const { width } = Dimensions.get('window');

const style: StyleProp<ViewStyle> = {
  width: width / 2,
  marginRight: 15,
  height: 200,
}

const imageStyle: StyleProp<ViewStyle> = {
  height: 100,
}

const viewMoreStyle: StyleProp<ViewStyle> = {
  width: width / 2,
  marginRight: 15,
  height: 200,
}

const SmallCard: React.FC<Props> = ({ item }) => {
  if (item.type === 'viewMore') {
    return <ViewMore style={viewMoreStyle} />;
  }

  return (
    <BlockCard item={item} style={style} imageStyle={imageStyle} />
  );
}

export default SmallCard;


