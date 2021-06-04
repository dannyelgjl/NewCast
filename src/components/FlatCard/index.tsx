import React from 'react';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';
import { Props } from './types';
import { TouchableOpacity } from 'react-native';

const FlatCard: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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