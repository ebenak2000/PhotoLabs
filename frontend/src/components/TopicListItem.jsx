import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, title, onClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onClick(id)}>
      {title}
    </div>
  );
};

export default TopicListItem;