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

const BreakingNews: React.FC<Props> = ({ data }) => {

  return (
    <HorizontalList title="Breaking News" data={data} />
  );
}

export default BreakingNews;