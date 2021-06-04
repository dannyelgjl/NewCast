import React from 'react';
import { Title } from '../';
import SmallCard from '../SmallCard';
import { FlatList } from 'react-native';

interface Props {
  title?: string;
  data: {
    id: string;
    title: string;
    desc: string;
    thumbnail: string;
    category: string;
  }[],
  item?: {
    id?: string;
  };
}

const HorizontalList: React.FC<Props> = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SmallCard item={item} />}
      />
    </>
  );
};

export default HorizontalList;