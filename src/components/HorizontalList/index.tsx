import React from 'react';
import { Title } from '../';
import SmallCard from '../SmallCard';

import { ListCard } from './styles';

interface Props {
  title?: string;
}

const HorizontalList: React.FC<Props> = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <ListCard
        data={data}
        keyExtractor={item => item.id} horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SmallCard item={item} />}
      />
    </>
  );
};

export default HorizontalList;