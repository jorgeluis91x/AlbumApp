import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, PhotoCard} from '../../components';
import routes, {RoutesParamList} from '../../config/routes';
import {SizedFlatList, TitleContainer} from './style';

import {getPhotosFromAlbum} from '../../state/Album/selector';
import {useSelector} from 'react-redux';

import {useDidMount} from './hooks';

const PhotosScreen: React.FC = () => {
  const route = useRoute<RouteProp<RoutesParamList, 'PHOTOS'>>();
  const {albumId} = route.params;
  const navigation = useNavigation();
  const photosState = useSelector(state => getPhotosFromAlbum(state, albumId));

  const renderItem = ({item}) => (
    <PhotoCard
      title={item.title}
      url={item.thumbnailUrl}
      onPress={() => navigation.navigate(routes.DETAILS, {photo: item})}
    />
  );

  useDidMount(photosState, albumId);

  return photosState.length === 0 ? (
    <ActivityIndicator />
  ) : (
    <SizedFlatList
      data={photosState}
      renderItem={renderItem}
      numColumns={3}
      keyExtractor={item => item.id.toString()}
    />
  );
};
export default PhotosScreen;
