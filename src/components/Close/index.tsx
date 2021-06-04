import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleProp, ViewStyle } from 'react-native';
import { Props } from './types';
import { Container } from './styles';

const style: StyleProp<ViewStyle> = {
  backgroundColor: 'rgba(92, 90, 91, 0.7)',
  padding: 10,
  borderRadius: 50,
}

const Close: React.FC<Props> = ({ onPress }) => {
  return (
    <Container>
      <Icon
        name="close"
        size={24}
        color="white"
        style={style}
        onPress={onPress}
      />
    </Container>
  );
}

export default Close;