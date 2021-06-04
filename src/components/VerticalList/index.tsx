import React from 'react';
import { Title, VerticalCard } from '../';
import { Props } from './types';

import { Container, Content } from './styles';

const VerticalList: React.FC<Props> = ({ title, data }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Content>
        {data.map(item => <VerticalCard item={item} key={item.id} />)}
      </Content>
    </Container>
  );
}

export default VerticalList;