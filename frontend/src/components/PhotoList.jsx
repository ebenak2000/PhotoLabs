import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map(photos => (
        <li key={photos.id}>
          <PhotoListItem
            id={photos.id}
            location={`${photos.location.city}, ${photos.location.country}`}
            imageSource={photos.urls.regular}
            username={photos.user.name}
            profile={photos.user.profile}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;