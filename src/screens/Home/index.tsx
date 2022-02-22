import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {AlbumCard} from '../../components';
import {Separator, SizedFlatList} from './style';

import {getAlbums} from '../../state/Album/selector';
import {useSelector} from 'react-redux';

import {useDidMount} from './hooks';
import routes from '../../config/routes';

const Home: React.FC = () => {
  const albumsState = useSelector(getAlbums);
  const navigation = useNavigation();

  useDidMount(albumsState);

  const renderItem = ({item}) => (
    <AlbumCard
      title={item.title}
      user={item.userId}
      onPress={() => navigation.navigate(routes.PHOTOS, {albumId: item.id})}
    />
  );

  return (
    <SizedFlatList
      data={albumsState}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Home;
