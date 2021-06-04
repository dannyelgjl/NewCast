import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Props } from './types';

import { Container, Text } from './styles';

const ViewMore: React.FC<Props> = ({ style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container style={style}>
        <Text>Ver mais...</Text>
      </Container>
    </TouchableOpacity>
  );
}

export default ViewMore;