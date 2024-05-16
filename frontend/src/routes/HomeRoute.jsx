import React from 'react';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  photos,
  topics,
  selectedTopic,
  favourites,
  selectedPhoto,
  onPhotoSelect,
  updateToFavPhotoIds,
  onLoadTopic,
  onClosePhotoDetailsModal,
}) => {
  if (!photos || !topics) {
    return null; // Ensure photos and topics are defined before rendering
  }

  const filteredPhotos = selectedTopic
    ? photos.filter(photo => photo.topics && photo.topics.some(topic => topic.id === selectedTopic))
    : photos;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        selectedTopic={selectedTopic}
        favourites={favourites}
        onTopicClick={onLoadTopic}
      />
      <TopicList topics={topics} onTopicClick={onLoadTopic} />
      <PhotoList
        photos={filteredPhotos}
        onToggleFavourite={updateToFavPhotoIds}
        favourites={favourites}
        onPhotoClick={onPhotoSelect}
      />
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          similarPhotos={selectedPhoto.similar_photos}
          onToggleFavourite={updateToFavPhotoIds}
          favourites={favourites}
        />
      )}
    </div>
  );
};

export default HomeRoute;