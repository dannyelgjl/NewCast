import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  height: 80px;
`;

export const ImageFeaturedNews = styled.Image`
  flex: 0.35;
  height: 100%;
`;

export const ContentContainer = styled.View`
  flex: 0.65%;
  padding: 0 5px;
`;