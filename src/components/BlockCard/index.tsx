import React from 'react';
import imgTest from '../../assets/x1.jpeg';
import { ViewStyle, StyleProp, View } from 'react-native';
import { Container, ImageFeaturedNews, ContentContainer } from './styles';
import { SubTitle, Title } from '../';

interface Props {
  style?: StyleProp<ViewStyle>,
};


const BlockCard: React.FC<Props> = ({ style }) => {
  return (
    <Container style={style}>
      <ImageFeaturedNews source={imgTest} />
      <ContentContainer>
        <Title>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s,
        </Title>
        <SubTitle>
          Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </SubTitle>
      </ContentContainer>
    </Container>
  );
}

export default BlockCard;