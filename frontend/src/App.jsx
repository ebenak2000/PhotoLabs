import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';

import './App.scss';



const App = () => (
  <div className="App">
    <TopNavigationBar/>
    <PhotoList />
  </div>
);

export default App;