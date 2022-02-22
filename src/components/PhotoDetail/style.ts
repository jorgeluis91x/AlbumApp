import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

export const HeaderBackground = styled(ImageBackground).attrs(() => ({
  imageStyle: {
    resizeMode: 'cover',
    borderRadius: 20,
  },
}))`
  height: 500px;
  margin-top: 10px;
`;

export const ContainerText = styled.View`
  background-color: #ffffff33;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding-left: 12px;
`;

export const HeaderTitle = styled.Text`
  color: #000000;
  font-size: 36px;
  font-weight: 600;
`;

export const HeaderSubtitle = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: 400;
`;
