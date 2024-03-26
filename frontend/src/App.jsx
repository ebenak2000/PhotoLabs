import React from 'react';

import PhotoList from './components/PhotoList';
import PhotoFavButton from './components/PhotoFavButton';
import './App.scss';


const photosArray = [
  {
    id: "1",
    location: { city: "Montreal", country: "Canada" },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: { city: "Paris", country: "France" },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Jane Doe",
    profile: `${process.env.PUBLIC_URL}/profile-2.jpg`,
  },
  {
    id: "3",
    location: { city: "Tokyo", country: "Japan" },
    imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    username: "John Smith",
    profile: `${process.env.PUBLIC_URL}/profile-3.jpg`,
  }
];

const App = () => (
  <div className="App">
    <PhotoList />
    <PhotoFavButton /> {}
  </div>
);

export default App;