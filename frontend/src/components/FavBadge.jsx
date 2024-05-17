import React from 'react';
import { useFavorites } from '../contexts/favoritesContext';
import './FavBadge.scss';

const FavBadge = () => {
  const { favorites } = useFavorites();

  return (
    <div className="fav-badge">
      <span className="fav-count">{favorites.length}</span>
      <i className="fa fa-heart" />
    </div>
  );
};

export default FavBadge;