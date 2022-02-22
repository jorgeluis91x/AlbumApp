import styled from 'styled-components';
import {Image, TouchableOpacity, View} from 'react-native';

export const PhotoCardContainer = styled(TouchableOpacity)`
  flex: ${1 / 3};
  flexdirection: column;
  margin: 5px;
`;

export const ImageStyled = styled(Image)`
  align-items: center;
  border-radius: 20px;
  height: 105px;
  justify-content: center;
`;

export const TextContainer = styled(View)`
  align-self: center;
  background-color: #dfdad9;
  border-radius: 16px;
  height: 30px;
  justify-content: center;
  margin-vertical: 10px;
  width: 90%;
`;
