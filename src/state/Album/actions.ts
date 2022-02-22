import {createAction} from '@reduxjs/toolkit';

import {Album, Photo} from '../types';

export const saveAlbums = createAction(
  'album/saveAlbums',
  (albums: Album[]) => ({
    payload: albums,
  }),
);

export const savePhotoOnAlbum = createAction(
  'album/savePhotosOnAlbum',
  (newPhotos: Photo[], albumId: string) => ({
    payload: {newPhotos, albumId},
  }),
);


