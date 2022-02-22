import styled from 'styled-components';
import {ImageBackground, Text, View} from 'react-native';

export const HeaderBackground = styled(ImageBackground).attrs(() => ({
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 20,
  },
}))`
  height: 245px;
  margin: 5px;
`;

export const ContainerText = styled(View)`
  background-color: #0000004D;
  borderRadius: 20px;
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 35px;
  padding-left: 12px;
`;

export const HeaderTitle = styled(Text)`
  color: white;
  font-size: 36px;
  font-weight: 600;
`;

export const HeaderSubtitle = styled(Text)`
  color: white;
  font-size: 18px;
  font-weight: 400;
`;
