import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

export const AlbumContainer = styled(View)`
  flex-direction: row;
`;

export const ImageStyled = styled(Image)`
  align-items: center;
  border-radius: 20px;
  height: 80px;
  justify-content: center;
  width: 80px;
`;

export const DetailsContainer = styled(View)`
  margin-horizontal: 12px;
`;

export const DetailsText = styled(Text)`
  color: black;
  font-size: 18px;
  font-weight: 400;
`;

export const AlbumDetailsContainer = styled(View)`
  flex: 1;
  justify-content: space-evenly;
  margin-left: 8px;
`;
