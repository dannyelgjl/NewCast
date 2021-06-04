import { ViewStyle, StyleProp } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  item?: Item;
  onPress?(): void,
};

interface Item {
  id?: string;
  title?: string;
  desc?: string;
  thumbnail?: string;
}