import React from 'react';
import { FlatCard, ViewMore } from '../';
import { Props } from './type';

const VerticalCard: React.FC<Props> = ({ item }) => {
  if (item.type === 'viewMore') {
    return <ViewMore />;
  }

  return (
    <FlatCard item={item} />
  );
}

export default VerticalCard;