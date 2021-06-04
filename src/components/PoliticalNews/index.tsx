import React from 'react';
import { VerticalList } from '../';
import { Props } from './types';

// import { Container } from './styles';

const PoliticalNews: React.FC<Props> = ({ data }) => {
  return (
    <VerticalList title="Política" data={data} />
  );
}

export default PoliticalNews;