import React from 'react';
import { Container, Text } from './styles';
import { ViewStyle, StyleProp } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
};

const ViewMore: React.FC<Props> = ({ style }) => {
  return (
    <Container style={style}>
      <Text>Ver mais...</Text>
    </Container>
  );
}

export default ViewMore;