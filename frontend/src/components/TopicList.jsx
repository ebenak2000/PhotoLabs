import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, onSelectTopic }) => {
  return (
    <div className="topic-list">
      {topics.map(topic => (
        <TopicListItem key={topic.id} topic={topic} onSelectTopic={onSelectTopic} />
      ))}
    </div>
  );
};

export default TopicList;