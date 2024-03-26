import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const { favorites } = useFavorites();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge isFavPhotoExist={favorites.length > 0} /> // Update based on favorites length
    </div>
  );
};

export default TopNavigationBar;