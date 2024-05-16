import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favourites, onTopicClick }) => {
  return (
    <div className="top-navigation-bar">
      <div className="top-nav-bar__logo">PhotoLabs</div>
      <ul className="topics-list">
        {topics.map(topic => (
          <li key={topic.id} className="topic-item" onClick={() => onTopicClick(topic.id)}>
            {topic.title}
          </li>
        ))}
      </ul>
      <FavBadge count={favourites.length} />
    </div>
  );
};

export default TopNavigationBar;