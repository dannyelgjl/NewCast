import { ViewStyle, StyleProp } from 'react-native';

export interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
};