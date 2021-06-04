import React from 'react';
import { HorizontalList } from '../';

interface Props {
  data: Data[],
}

interface Data {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
}

const TechNews: React.FC<Props> = ({ data }) => {

  return (
    <HorizontalList title="Tecnologia" data={data} />
  );
}

export default TechNews;