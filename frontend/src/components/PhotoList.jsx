import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos }) => {
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