import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isVisible, children, setIsModalVisible }) => {
  if (!isVisible) return null;

  const handleCloseClick = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        {children}
      </div>
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="Close" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;