import React from 'react';
import { HorizontalList } from '../';
import { Props } from './types';

const BreakingNews: React.FC<Props> = ({ data }) => {

  return (
    <HorizontalList title="Últimas notícias" data={data} />
  );
}

export default BreakingNews;