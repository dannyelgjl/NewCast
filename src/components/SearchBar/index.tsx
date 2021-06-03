import React from 'react';

import { Container, Input } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <Input placeholder="Busque aqui..." />
    </Container>
  );
};

export default SearchBar;