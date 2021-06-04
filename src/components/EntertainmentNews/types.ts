export interface Props {
  data: Data[],
}

interface Data {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  category: string;
};