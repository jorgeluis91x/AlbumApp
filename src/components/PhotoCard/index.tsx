import React from 'react';
import {Text} from 'react-native';
import {ImageStyled, PhotoCardContainer, TextContainer} from './style';

type TPhotoCard = {
  title: string;
  url: string;
  onPress: () => void;
};

const PhotoCard = ({onPress, title, url}: TPhotoCard) => {
  return (
    <PhotoCardContainer onPress={onPress}>
      <ImageStyled source={{uri: url}} />
      <TextContainer>
        <Text style={{textAlign: 'center'}}>{title.split(' ')[0]}</Text>
      </TextContainer>
    </PhotoCardContainer>
  );
};

export default PhotoCard;
