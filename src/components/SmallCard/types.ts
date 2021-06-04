export interface Props {
  item: Item;
}

export interface Item {
  title?: string;
  desc?: string;
  thumbnail?: string;
  type?: string;
  category?: string;
}