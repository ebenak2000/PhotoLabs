import React from 'react';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import TopNavigationBar from '../components/TopNavigationBar';
import './HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoSelect, updateToFavPhotoIds, onLoadTopic, onClosePhotoDetailsModal }) => (
  <div className="home-route">
    <TopNavigationBar topics={topics} onLoadTopic={onLoadTopic} />
    <TopicList topics={topics} onLoadTopic={onLoadTopic} />
    <PhotoList photos={photos} onPhotoSelect={onPhotoSelect} updateToFavPhotoIds={updateToFavPhotoIds} />
  </div>
);

export default HomeRoute;