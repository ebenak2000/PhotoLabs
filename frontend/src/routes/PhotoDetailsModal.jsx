import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onClose, similarPhotos, onToggleFavourite, favourites }) => {
  if (!photo) return null;

  const isFavourite = (id) => favourites.includes(id);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>X</button>
      <div className="photo-details-modal__image-container">
        <img src={photo.urls.full} alt={photo.user.name} className="photo-details-modal__image" />
        <PhotoFavButton onClick={() => onToggleFavourite(photo.id)} selected={isFavourite(photo.id)} className="photo-details-modal__fav-button" />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img src={photo.user.profile} alt={photo.user.name} className="photo-details-modal__photographer-profile" />
        <div className="photo-details-modal__photographer-info">
          <div>{photo.user.name}</div>
          <div className="photo-details-modal__photographer-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
      <h3 className="photo-details-modal__header">Similar Photos</h3>
      <div className="similar-photos">
        {similarPhotos.map(similarPhoto => (
          <div key={similarPhoto.id} className="similar-photo-container">
            <img src={similarPhoto.urls.regular} alt={similarPhoto.user.name} />
            <PhotoFavButton onClick={() => onToggleFavourite(similarPhoto.id)} selected={isFavourite(similarPhoto.id)} className="photo-fav-button" />
            <div className="similar-photo-info">
              <img src={similarPhoto.user.profile} alt={similarPhoto.user.name} className="photo-details-modal__photographer-profile" />
              <p>{similarPhoto.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;