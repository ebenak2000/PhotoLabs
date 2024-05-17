import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import './PhotoListItem.scss';

const PhotoListItem = ({ photo, onPhotoSelect, updateToFavPhotoIds, isFavorited }) => (
  <div className="photo-list-item" onClick={() => onPhotoSelect(photo)}>
    <img src={photo.url} alt={photo.title} />
    <PhotoFavButton
      isFavorited={isFavorited}
      onClick={(e) => {
        e.stopPropagation();
        updateToFavPhotoIds(photo.id);
      }}
    />
  </div>
);

export default PhotoListItem;