import React from 'react';
import { BlockCard } from '../';
import { StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  item: {
    id: string,
    title?: string;
    desc?: string;
    thumbnail?: string;
  }
}

const FeatureNews: React.FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <BlockCard
      item={item}
      style={{ marginVertical: 15 }}
      onPress={() => navigate('NewDetail', { item })}
    />
  );
}

export default FeatureNews;