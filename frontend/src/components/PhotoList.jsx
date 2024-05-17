import React from 'react';
import PhotoListItem from './PhotoListItem';
import './PhotoList.scss';

const PhotoList = ({ photos, onPhotoSelect, updateToFavPhotoIds, favorites }) => (
  <div className="photo-list">
    {photos.map(photo => (
      <PhotoListItem
        key={photo.id}
        photo={photo}
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFavorited={favorites.includes(photo.id)}
      />
    ))}
  </div>
);

export default PhotoList;