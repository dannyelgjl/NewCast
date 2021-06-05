import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SubTitle, Title } from '../';
import { useNavigation } from '@react-navigation/core';
import { Props } from './types';

import { Container, ImageFeaturedNews, ContentContainer } from './styles';


const FlatCard: React.FC<Props> = ({ item }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate('NewsDetail', { item })}>
      <Container>
        <ImageFeaturedNews source={{ uri: item?.thumbnail }} />
        <ContentContainer>
          <Title>
            {item?.title}
          </Title>
          <SubTitle>
            {item?.desc}
          </SubTitle>
        </ContentContainer>
      </Container>
    </TouchableOpacity>
  );
}

export default FlatCard;