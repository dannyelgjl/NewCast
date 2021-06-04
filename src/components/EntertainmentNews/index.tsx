import React from 'react';
import { VerticalList } from '../';
import { Props } from './types';


const EntertainmentNews: React.FC<Props> = ({ data }) => {
  return (
    <VerticalList title="Entretenimento" data={data} />
  );
}

export default EntertainmentNews;