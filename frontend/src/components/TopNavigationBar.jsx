import React from 'react';

import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, selectedTopic, onTopicClick, favourites }) => {
  return (
    <div className="top-navigation-bar">
      <h1>PhotoLabs</h1>
      <div className="topics">
        {topics.map((topic) => (
          <span
            key={topic.id}
            className={`topic ${selectedTopic === topic.id ? 'selected' : ''}`}
            onClick={() => onTopicClick(topic.id)}
          >
            {topic.name}
          </span>
        ))}
      </div>
      <div className="favourites">
        <span className="heart-icon">
          ❤️ {favourites.length}
        </span>
      </div>
    </div>
  );
};

export default TopNavigationBar;