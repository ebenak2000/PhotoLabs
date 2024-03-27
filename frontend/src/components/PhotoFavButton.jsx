import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = function() {
  const [isFaved, setIsFaved] = useState(false);

  const toggleFav = () => {
    setIsFaved(!isFaved);
  };

  return (
    <div className="photo-list__fav-icon">
      <FavIcon selected={isFaved} />
    </div>
  );
};

export default PhotoFavButton;