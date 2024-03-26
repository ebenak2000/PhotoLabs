import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

// Mock Data Imports
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} />
  </div>
);
export default App;