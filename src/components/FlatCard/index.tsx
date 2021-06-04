import React from 'react';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';
import { Props } from './types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

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