import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  console.log("Rendering PhotoFavButton");
  const [isFaved, setIsFaved] = useState(false);

  const toggleFav = () => {
    setIsFaved(!isFaved);
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <FavIcon selected={isFaved} />
    </div>
  );
}

export default PhotoFavButton;