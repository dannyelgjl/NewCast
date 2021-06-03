import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Button, FlatList } from 'react-native'
import { SearchBar, FeatureNews } from '../../components';
import { Container } from './styles';

const News = () => {

  return (
    <Container>
      <SearchBar />
      <FeatureNews />
    </Container>
  )
}

export default News