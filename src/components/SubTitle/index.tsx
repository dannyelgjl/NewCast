import React from 'react';

import { Text } from './styles';

interface Props {
  numberOfLines?: number;
  size?: number;
}

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