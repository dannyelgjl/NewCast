import React from 'react';
import { Title, FlatCard, VerticalCard } from '../';
import { Container, Content } from './styles';

interface Props {
  title?: string;
  data: {
    id: string;
    title: string;
    desc: string;
    thumbnail: string;
    category: string;
  }[],
  item?: {
    id?: string;
  };
}

const VerticalList: React.FC<Props> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        {data.map(item => <VerticalCard item={item} key={item.id} />)}
      </Content>
    </Container>
  );
}

export default VerticalList;