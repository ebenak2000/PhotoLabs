import React from "react";

import "../styles/PhotoListItem.scss";


  const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
    return (
      <div className="photo-list-item" key={id}>
        <img src={imageSource} alt={`Photo by ${username}`} />
        <div className="photo-info">
          <img src={profile} alt={`${username}'s profile`} />
          <div className="photo-details">
            <h4>{username}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  };

export default PhotoListItem;
