import styled from 'styled-components';
import {FlatList, View} from 'react-native';

export const SizedFlatList = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 80,
  },
}))`
  padding-horizontal: 32px;
  padding-top: 16px;
`;

export const Separator = styled(View)`
  margin-vertical: 12px;
`;
