import React from 'react';
import { HorizontalList } from '../';
import { Props } from './types';

const TechNews: React.FC<Props> = ({ data }) => {

  return (
    <HorizontalList title="Tecnologia" data={data} />
  );
}

export default TechNews;