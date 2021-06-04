import React from 'react';
import { Props } from './types';

import { Text } from './styles';



const Title: React.FC<Props> = ({ children, numberOfLines = 2, size = 15 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontSize: size }}
    >
      {children}
    </Text>
  );
}

export default Title;