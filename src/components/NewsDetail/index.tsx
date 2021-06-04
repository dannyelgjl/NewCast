import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { HorizontalList } from '../';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { Container, Content, Description, ImageDetail, Title, RelatedPost } from './styles';
import { useRoute, RouteProp } from '@react-navigation/core';
import { relatedPosts } from '../../services/news';

const { width } = Dimensions.get('window');

const style: StyleProp<ViewStyle> = {
  width: width,
  marginRight: 15,
  height: 200,
}

type StackParamsList = {
  NewsDetail: {
    item: {
      title: string;
      desc: string;
      thumbnail: string;
    }
  }
}

const NewsDetail: React.FC = () => {
  const route = useRoute<RouteProp<StackParamsList, 'NewsDetail'>>();
  const { desc, thumbnail, title } = route.params.item;

  console.log(title)

  // const { title, desc, thumbnail } = props.route.params.item;
  return (
    <Container>
      <ImageDetail style={style} source={{ uri: thumbnail }} />
      <Content>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </Content>
      <RelatedPost>
        <HorizontalList title="Notícias Relacionadas" data={relatedPosts} />
      </RelatedPost>
    </Container>
  );
}

export default NewsDetail;