import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = function() {
  console.log("Rendering PhotoFavButton"); // This should appear in the console when the component renders
  const [isFaved, setIsFaved] = useState(false);

  const toggleFav = () => {
    setIsFaved(!isFaved); // This toggles the favorite state
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <FavIcon selected={isFaved} /> {/* This should change based on the isFaved state */}
    </div>
  );
};

export default PhotoFavButton;