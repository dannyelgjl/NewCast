import React from 'react';
import { FlatCard, ViewMore } from '../';
import { useNavigation } from '@react-navigation/core';
import { Props } from './type';

const VerticalCard: React.FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();

  if (item.type === 'viewMore') {
    return <ViewMore onPress={() => navigate('NewsList', { item })} />;
  }

  return (
    <FlatCard item={item} />
  );
}

export default VerticalCard;