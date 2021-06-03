import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { ViewStyle, StyleProp, View } from 'react-native';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';

interface Props {
  style?: StyleProp<ViewStyle>,
  imageStyle?: StyleProp<ViewStyle>,
  item: {
    title: string,
    thumbnail: string,
    desc: string,
  }
};

// [style.container, style]
const BlockCard: React.FC<Props> = ({ style, imageStyle, item }) => {
  return (
    <Container style={style}>
      <ImageFeaturedNews source={{ uri: item.thumbnail }} style={imageStyle} />
      <ContentContainer>
        <Title>
          {item.title}
        </Title>
        <SubTitle>
          {item.desc}
        </SubTitle>
      </ContentContainer>
    </Container>
  );
}

export default BlockCard;