import React from 'react';
import { Title, SmallCard } from '../';
import { FlatList } from 'react-native';
import { Props } from './types';

import { ListStyle } from './styles';


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