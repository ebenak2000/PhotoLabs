import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { FavoritesProvider } from './contexts/favoritesContext';

import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => (
  <FavoritesProvider>
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  </FavoritesProvider>
);

export default App;