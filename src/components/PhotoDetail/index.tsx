import React from 'react';
import {
  ContainerText,
  HeaderBackground,
  HeaderSubtitle,
  HeaderTitle,
} from './style';

type TPhotoDetail = {
  photo: {
    albumId: string;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  };
};

const PhotoDetail = ({photo}: TPhotoDetail) => {
  return (
    <HeaderBackground source={{uri: photo.url}}>
      <ContainerText>
        <HeaderTitle>Photo {photo.id}</HeaderTitle>
        <HeaderSubtitle numberOfLines={2}>{photo.title}</HeaderSubtitle>
      </ContainerText>
    </HeaderBackground>
  );
};

export default PhotoDetail;
