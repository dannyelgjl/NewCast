import React, { useState } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from '../../services/news';
import { Container, Input } from './styles';

interface PropsForm {
  id?: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
}

const NewNews: React.FC = () => {
  const { navigate } = useNavigation();

  const [form, setForm] = useState<PropsForm>({} as PropsForm);
  console.log(data.length);


  const handleSubmit = () => {
    navigate('Home');
    data.push({ ...form, id: String(Math.floor(Math.random() * 20)) })
  }

  return (
    <Container>
      <Input
        placeholder="Titulo"
        value={form.title}
        onChangeText={(event) => setForm({ ...form, title: event })}
      />
      <Input
        placeholder="Descricao"
        value={form.desc}
        onChangeText={(event) => setForm({ ...form, desc: event })}
      />
      <Input
        placeholder="Thumbnail"
        value={form.thumbnail}
        onChangeText={(event) => setForm({ ...form, thumbnail: event })}
      />
      <Input
        placeholder="Categoria"
        value={form.category}
        onChangeText={(event) => setForm({ ...form, category: event })}
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </Container>
  );
}

export default NewNews;