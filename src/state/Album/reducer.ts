import {createSlice} from '@reduxjs/toolkit';
import {AlbumState} from '../types';

const initialState: AlbumState = {
    albums: []
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    saveAlbums: (state, {payload}) => {
      state.albums = payload;
    },
    savePhotosOnAlbum: (state, {payload}) => {
      const {albumId, newPhotos} = payload;
      if (state.albums.length > 0) {
        const indexAlbum = state.albums.findIndex(
          element => element.id === albumId,
        );
        if (indexAlbum !== -1) {
          state.albums[indexAlbum].photos = newPhotos;
        }
      }
    },
  },
});

export const albumsState = state => state;
export default albumSlice.reducer;