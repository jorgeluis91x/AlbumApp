import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {savePhotoOnAlbum} from '../../state/Album/actions';
import endpoints from '../../config/endpoints';

export function useDidMount(photosState, albumId) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (photosState.length === 0) {
      fetch(`${endpoints.getAlbums}/${albumId}/photos`)
        .then(response => response.json())
        .then(json => {
          dispatch(savePhotoOnAlbum(json, albumId));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
