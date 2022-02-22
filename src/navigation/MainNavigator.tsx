import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import routes from '../config/routes';
import {DetailsScreen, HomeScreen, PhotosScreen} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

const Stack = createStackNavigator();

const getHeaderOptions = ({route}) => ({
  headerShown: true,
  headerBackTitleVisible: false,
  headerLeftContainerStyle: styles.headerLeftContainer,
  presentation: route.name === routes.DETAILS && 'modal',
  headerBackImage: () => (
    <Icon color="white" name="arrow-back-circle-outline" size={30} />
  ),
});

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.HOME}
      screenOptions={{
        headerBackTitleVisible: true,
        headerTitleStyle: styles.title,
        headerStyle: styles.headerStyle,
      }}>
      <Stack.Screen component={HomeScreen} name={routes.HOME} />
      <Stack.Screen
        component={PhotosScreen}
        name={routes.PHOTOS}
        options={getHeaderOptions}
      />
      <Stack.Screen
        component={DetailsScreen}
        name={routes.DETAILS}
        options={getHeaderOptions}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
