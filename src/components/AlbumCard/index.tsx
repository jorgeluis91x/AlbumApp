import React from 'react';
import {TouchableOpacity} from 'react-native';
import {renderAlbumPhoto} from '../../utils/renderAlbumPhoto';
import {
  ContainerText,
  HeaderBackground,
  HeaderSubtitle,
  HeaderTitle,
} from './style';

type TAlbumCard = {
  background?: string;
  title?: string;
  user?: string;
  onPress?: () => void;
};

const AlbumCard = ({background, title, user, onPress}: TAlbumCard) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HeaderBackground source={{uri: renderAlbumPhoto(user)}}>
        <ContainerText>
          <HeaderTitle numberOfLines={2}>{title}</HeaderTitle>
          <HeaderSubtitle>By User {user}</HeaderSubtitle>
        </ContainerText>
      </HeaderBackground>
    </TouchableOpacity>
  );
};

export default AlbumCard;
