import React from 'react';
import { VerticalList } from '../';

// import { Container } from './styles';

interface Props {
  data: Data[],
}

interface Data {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
};

const EntertainmentNews: React.FC<Props> = ({ data }) => {
  return (
    <VerticalList title="Entertainment News" data={data} />
  );
}

export default EntertainmentNews;