import {FlatList, View} from 'react-native';
import styled from 'styled-components';

export const SizedFlatList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 80,
  },
}))`
  padding-horizontal: 16px;
  padding-top: 16px;
`;

export const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
`;
