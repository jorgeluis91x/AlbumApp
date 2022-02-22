export const getAlbumState = state => state.album;
export const getAlbums = state => getAlbumState(state).albums;

export const getAlbumById = (state, albumId) => {
  if (getAlbums(state).length > 0) {
    const indexAlbum = getAlbums(state).findIndex(
      element => element.id === albumId,
    );
    if (indexAlbum !== -1) {
      return getAlbums(state)[indexAlbum] || {};
    }
  }
  return {};
};

export const getPhotosFromAlbum = (state, albumId) => {
  return getAlbumById(state, albumId)?.photos || [];
};
