import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { Dimensions, StyleProp, ViewStyle } from 'react-native';
import { Container, Content, Description, ImageDetail, Title } from './styles';

const { width } = Dimensions.get('window');

const style: StyleProp<ViewStyle> = {
  width: width,
  marginRight: 15,
  height: 200,
}

const NewsDetail: React.FC = () => {
  return (
    <Container>
      <ImageDetail style={style} source={imgTest} />
      <Content>
        <Title>Teste titulo legal</Title>
        <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Description>
      </Content>
    </Container>
  );
}

export default NewsDetail;