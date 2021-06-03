import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { SearchBar, FeatureNews, SmallCard } from '../../components';
import { Container } from './styles';

const News = () => {

  return (
    <Container>
      <SearchBar />
      <FeatureNews />
      <SmallCard />
    </Container>
  )
}

export default News