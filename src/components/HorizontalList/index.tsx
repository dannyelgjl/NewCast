import React from 'react';
import { Title } from '../';
import SmallCard from '../SmallCard';
import { FlatList } from 'react-native';
import { ListStyle } from './styles';
import { Props } from './types';


const HorizontalList: React.FC<Props> = ({ title, data }) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <ListStyle>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SmallCard item={item} />}
        />
      </ListStyle>

    </>
  );
};

export default HorizontalList;