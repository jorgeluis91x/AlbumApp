import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RoutesParamList} from '../../config/routes';
import {
  AlbumContainer,
  AlbumDetailsContainer,
  DetailsContainer,
  DetailsText,
  ImageStyled,
} from './style';
import PhotoDetail from '../../components/PhotoDetail';
import {renderAlbumPhoto} from '../../utils/renderAlbumPhoto';

import {getAlbumById} from '../../state/Album/selector';
import {useSelector} from 'react-redux';

const DetailsScreen = () => {

  const route = useRoute<RouteProp<RoutesParamList, 'DETAILS'>>();
  const {photo} = route.params;
  const album = useSelector(state => getAlbumById(state, photo.albumId));


  return (
    <SafeAreaView>
        <DetailsContainer>
          <AlbumContainer>
            <ImageStyled source={{uri: renderAlbumPhoto(album.userId)}} />
            <AlbumDetailsContainer>
              <DetailsText>Album {album.id}</DetailsText>
              <DetailsText>User {album.userId}</DetailsText>
              <DetailsText numberOfLines={1}>{album.title}</DetailsText>
            </AlbumDetailsContainer>
          </AlbumContainer>
          <PhotoDetail photo={photo} />
        </DetailsContainer>
    </SafeAreaView>
  );
};

export default DetailsScreen;
