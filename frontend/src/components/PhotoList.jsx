import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem
            id={photo.id}
            location={`${photo.location.city}, ${photo.location.country}`}
            imageSource={photo.urls.regular}
            username={photo.user.name}
            profile={photo.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;