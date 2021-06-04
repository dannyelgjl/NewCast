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

const PoliticalNews: React.FC<Props> = ({ data }) => {
  return (
    <VerticalList title="Political News" data={data} />
  );
}

export default PoliticalNews;