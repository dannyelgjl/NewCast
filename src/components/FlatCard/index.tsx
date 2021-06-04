import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { ViewStyle, StyleProp } from 'react-native';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';

interface Props {
  item?: Item;
};

interface Item {
  id?: string;
  title?: string;
  desc?: string;
  thumbnail?: string;
}


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