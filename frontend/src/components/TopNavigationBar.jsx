import React from 'react';
import { useFavorites } from '../contexts/favoritesContext';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  const { favorites } = useFavorites();

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge count={favorites.length} />
    </div>
  );
};

export default TopNavigationBar;