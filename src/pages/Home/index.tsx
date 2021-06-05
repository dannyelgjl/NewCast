import React, { useState, useEffect } from 'react'
import { Button } from 'react-native';
import {
  SearchBar,
  FeatureNews,
  BreakingNews,
  TechNews,
  FlatCard,
  PoliticalNews,
  EntertainmentNews,
} from '../../components';
import { Container } from './styles';
import data from '../../services/news';
import { news, techNews as techNews1 } from '../../services/news';

const News: React.FC = () => {

  const breakingNews = data.filter(item => item.category === 'breaking-news').reverse();
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(item => item.category === 'entertainment');

  return (
    <Container>
      <SearchBar />
      <FeatureNews item={news} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <FlatCard item={techNews1} />
      <EntertainmentNews data={entertainmentNews} />
    </Container>
  );
};

export default News