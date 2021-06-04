import React from 'react';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { HorizontalList, Close } from '../../components';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/core';
import { relatedPosts } from '../../services/news';
import { StackParamsList } from './types';

import { Container, Content, Description, ImageDetail, Title, RelatedPost } from './styles';

const { width } = Dimensions.get('window');

const style: StyleProp<ViewStyle> = {
  width: width,
  marginRight: 15,
  height: 200,
}

const NewsDetail: React.FC = () => {
  const { navigate } = useNavigation();
  const route = useRoute<RouteProp<StackParamsList, 'NewsDetail'>>();
  const { desc, thumbnail, title } = route.params.item;

  // const { title, desc, thumbnail } = props.route.params.item;
  return (
    <>
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
      <Close onPress={() => navigate('Home')} />
    </>
  );
}

export default NewsDetail;