import React from 'react';
import './TopNavigationBar.scss';

const TopNavigationBar = ({ topics, onLoadTopic }) => (
  <div className="top-navigation-bar">
    {topics.map(topic => (
      <button key={topic.id} onClick={() => onLoadTopic(topic.id)}>
        {topic.name}
      </button>
    ))}
  </div>
);

export default TopNavigationBar;