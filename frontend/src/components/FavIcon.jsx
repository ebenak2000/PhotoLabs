import React, { useContext } from 'react';
import { FavoritesProvider } from '../contexts/favoritesContext';

const FavIcon = ({ photoId, updateToFavPhotoIds }) => {
  const { favourites } = useContext(FavoritesProvider);

  const isFav = favourites.includes(photoId);

  return (
    <div onClick={() => updateToFavPhotoIds(photoId)}>
      {isFav ? '❤️' : '🤍'}
    </div>
  );
};

export default FavIcon;