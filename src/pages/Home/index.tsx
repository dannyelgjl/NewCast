import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
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

const News = () => {

  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const politicalNews = data.filter(item => item.category === 'political');
  const entertainmentNews = data.filter(item => item.category === 'entertainment');
  return (
    <Container>
      <SearchBar />
      <FeatureNews item={{
        id: "1",
        title: "Teste titulo 1 2 3",
        desc:
          "desad asd edasd deasd deasd dasda dwasdas dwasd.",
        thumbnail: "https://i.pinimg.com/originals/70/02/6e/70026eec5353580f50ea89127ff895e7.png",
      }} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      {/* <FlatCard item={{
        id: "4",
        title: "Teste titulo 1 2 5",
        desc:
          "desad asd edasd deasd deasd dasda dwasdas dwasd.",
        thumbnail: "https://i.pinimg.com/originals/70/02/6e/70026eec5353580f50ea89127ff895e7.png",
      }} /> */}
      <EntertainmentNews data={entertainmentNews} />
    </Container>
  )
}

export default News