import React from 'react';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';
import { Props } from './types';

const FlatCard: React.FC<Props> = ({ item }) => {
  return (
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
  );
}

export default FlatCard;