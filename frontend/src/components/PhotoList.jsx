import React, { useState } from 'react';
import PhotoListItem from './PhotoListItem';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import "../styles/PhotoList.scss";
import photos from '../mocks/photos';

const PhotoList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalVisible(true);
  };

  return (
    <>
      <ul className="photo-list">
        {photos.map(photo => (
          <li key={photo.id} onClick={() => handlePhotoClick(photo)}>
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
      <PhotoDetailsModal isVisible={isModalVisible} setIsModalVisible={setIsModalVisible}>
        {selectedPhoto && (
          <div>
            <img src={selectedPhoto.urls.regular} alt={`Photo by ${selectedPhoto.user.name}`} style={{ maxWidth: '100%' }} />
            <p>Location: {`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}</p>
            <p>Photographer: {selectedPhoto.user.name}</p>
            
          </div>
        )}
      </PhotoDetailsModal>
    </>
  );
};

export default PhotoList;