import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ count }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={count > 0}/>
      {count > 0 && <span className="fav-count">{count}</span>}
    </div>
  );
};

export default FavBadge;