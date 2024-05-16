import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onToggleFavourite, favourites, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          username={photo.user.username}
          imageSource={photo.urls.regular}
          location={`${photo.location.city}, ${photo.location.country}`}
          profile={photo.user.profile}
          topics={photo.topics || []}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={() => onToggleFavourite(photo.id)}
          onPhotoClick={() => onPhotoClick(photo)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;