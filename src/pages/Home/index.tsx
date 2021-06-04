import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { SearchBar, FeatureNews, SmallCard, BreakingNews, TechNews } from '../../components';
import { Container } from './styles';
import data from '../../services/news';

const News = () => {

  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech')
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
      <TechNews data={techNews} />
    </Container>
  )
}

export default News