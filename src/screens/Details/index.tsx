import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RoutesParamList} from '../../config/routes';


const DetailsScreen = () => {

  const route = useRoute<RouteProp<RoutesParamList, 'DETAILS'>>();
  const {photo} = route.params;


  return (
    <SafeAreaView/>
  );
};

export default DetailsScreen;
