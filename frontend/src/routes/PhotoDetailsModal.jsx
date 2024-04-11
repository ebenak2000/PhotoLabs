import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isVisible, setIsModalVisible, children }) => {
  const handleCloseClick = () => {
    setIsModalVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        {/* Close Button */}
        <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
          <img src={closeSymbol} alt="Close" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;