import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';
import { Props } from './types';


const BlockCard: React.FC<Props> = ({ style, imageStyle, item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <ImageFeaturedNews source={{ uri: item?.thumbnail }} style={imageStyle} />
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

export default BlockCard;