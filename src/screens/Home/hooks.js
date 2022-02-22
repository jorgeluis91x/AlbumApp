import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {saveAlbums} from '../../state/Album/actions';
import endpoints from '../../config/endpoints';

export function useDidMount(albumsState) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (albumsState.length === 0) {
      fetch(endpoints.getAlbums)
        .then(response => response.json())
        .then(json => {
          dispatch(saveAlbums(json));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
