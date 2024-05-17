import React from 'react';
import FavIcon from './FavIcon';
import './PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorited, onClick }) => (
  <FavIcon isFavorited={isFavorited} onClick={onClick} />
);

export default PhotoFavButton;