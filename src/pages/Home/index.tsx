import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import NewsCard from '../../components/News';
import SearchBar from '../../components/SearchBar';
import newAPI from '../../services/news';
import { Container } from './styles';

const News = () => {
  const [news, setNews] = useState([]);

  return (
    <Container>
      <SearchBar />
      <FlatList
        data={newAPI}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />
        }}
      />
    </Container>
  )
}

export default News