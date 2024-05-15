import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, title, onClick }) => {
  return (
    <li className="topic-list-item" onClick={() => onClick(id)}>
      {title}
    </li>
  );
};

export default TopicListItem;