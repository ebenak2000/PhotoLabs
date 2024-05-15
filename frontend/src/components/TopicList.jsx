import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";
import topics from '../mocks/topics';

const TopicList = ({ onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          title={topic.title}
          onClick={onTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;