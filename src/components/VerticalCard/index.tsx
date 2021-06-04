import React from 'react';
import { FlatCard, ViewMore } from '../';
import { Props } from './type';
import { useNavigation } from '@react-navigation/native';


const VerticalCard: React.FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();

  if (item.type === 'viewMore') {
    return <ViewMore />;
  }

  return (
    <FlatCard item={item} onPress={() => navigate('NewsDetail', { item })} />
  );
}

export default VerticalCard;