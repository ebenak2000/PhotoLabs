import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ onClick, selected }) => {
  return (
    <div className="photo-list__fav-icon" onClick={onClick}>
      <FavIcon selected={selected} />
    </div>
  );
};

export default PhotoFavButton;