import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, location, imageSource, username, profile, topics = [], isFavourite, onToggleFavourite, onPhotoClick }) => {
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" onClick={onPhotoClick} />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h4 className="photo-list__user-name">{username}</h4>
          <p className="photo-list__user-location">{location}</p>
        </div>
        <PhotoFavButton onClick={onToggleFavourite} selected={isFavourite} />
      </div>
      <ul className="photo-list__topics">
        {topics.map(topic => (
          <li key={topic.id} className="photo-list__topic">{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoListItem;