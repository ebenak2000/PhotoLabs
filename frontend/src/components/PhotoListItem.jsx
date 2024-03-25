import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  return (
    <div className="photo-list__item" key={id}>
      <img src={imageSource} alt={`Photo by ${username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h4 className="photo-list__user-name">{username}</h4>
          <p className="photo-list__user-location">{`${location}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;