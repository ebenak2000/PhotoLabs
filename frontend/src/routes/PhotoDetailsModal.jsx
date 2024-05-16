import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onClose, similarPhotos, onToggleFavourite, favourites }) => {
  if (!photo) return null;

  const isFavourite = (id) => favourites.includes(id);

  return (
    <div className="photo-details-modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="main-photo-container">
          <img src={photo.urls.full} alt={photo.user.name} className="main-photo" />
          <PhotoFavButton onClick={() => onToggleFavourite(photo.id)} selected={isFavourite(photo.id)} />
        </div>
        <div className="photo-info">
          <h2>{photo.user.name}</h2>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
        <h3>Similar Photos</h3>
        <div className="similar-photos">
          {similarPhotos.map(similarPhoto => (
            <div key={similarPhoto.id} className="similar-photo-container">
              <img src={similarPhoto.urls.regular} alt={similarPhoto.user.name} />
              <PhotoFavButton onClick={() => onToggleFavourite(similarPhoto.id)} selected={isFavourite(similarPhoto.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;