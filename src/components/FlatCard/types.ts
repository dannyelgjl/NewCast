export interface Props {
  item?: Item;
  onPress?(): void,
};

interface Item {
  id?: string;
  title?: string;
  desc?: string;
  thumbnail?: string;
}