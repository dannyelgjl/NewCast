import React from 'react';
import { BlockCard } from '../';
import { useNavigation } from '@react-navigation/native';
import { Props } from './types';

const FeatureNews: React.FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <BlockCard
      item={item}
      style={{ marginVertical: 15 }}
      onPress={() => navigate('NewsDetail', { item })}
    />
  );
}

export default FeatureNews;