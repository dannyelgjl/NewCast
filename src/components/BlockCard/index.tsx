import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { ViewStyle, StyleProp, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';

interface Props {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  item?: Item;
  onPress?(): void,
};

interface Item {
  id?: string;
  title?: string;
  desc?: string;
  thumbnail?: string;
}


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