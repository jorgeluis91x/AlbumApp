import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native'

import {RoutesParamList} from '../../config/routes';

const PhotosScreen: React.FC = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'PHOTOS'>>();
  const {albumId} = route.params;


  return <View/>
};
export default PhotosScreen;
