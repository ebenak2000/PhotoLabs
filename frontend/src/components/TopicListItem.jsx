import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topic, onSelectTopic }) => {
  return (
    <button className="topic-list-item" onClick={() => onSelectTopic(topic.id)}>
      {topic.title}
    </button>
  );
};

export default TopicListItem;