import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} />
      <div className="home-route__photos-section">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};
export default HomeRoute;