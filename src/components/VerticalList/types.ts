export interface Props {
  title?: string;
  data: Data[],
  item?: {
    id?: string;
  };
}

interface Data {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
}