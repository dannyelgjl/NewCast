import React from 'react';
import { BlockCard } from '../';
import { StyleProp, ViewStyle, Dimensions } from 'react-native';

// import { Container } from './styles';

const { width } = Dimensions.get('window');

const style: StyleProp<ViewStyle> = {
  width: width / 2,
  height: 200,
  marginRight: 15,
}

const imageStyle: StyleProp<ViewStyle> = {
  height: 200,
}


const SmallCard: React.FC = ({ item }: any) => {
  return (
    <BlockCard item={item} style={style} imageStyle={imageStyle} />
  );
}

export default SmallCard;


