import React from 'react';
import { VerticalList } from '../../components';
import data from '../../services/news';

import { Header, CategoryTitle, NewsScroll } from './styles';

const NewsList: React.FC = () => {
  const techNews = data.filter(item => item.category === 'tech');
  const header = techNews[0].category.split('-').join(' ').toUpperCase();

  return (
    <>
      <Header>
        <CategoryTitle>{header}</CategoryTitle>
      </Header>

      <NewsScroll>
        <VerticalList data={techNews} />
      </NewsScroll>
    </>
  );
}

export default NewsList;