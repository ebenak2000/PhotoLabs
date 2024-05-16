import React, { useEffect, useState } from 'react';
import PhotoList from './PhotoList';
import TopicList from './TopicList';
import TopNavigationBar from './TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const photosResponse = await fetch('http://localhost:8001/api/photos');
      const photosData = await photosResponse.json();
      setPhotos(photosData);

      const topicsResponse = await fetch('http://localhost:8001/api/topics');
      const topicsData = await topicsResponse.json();
      setTopics(topicsData);
    };
    fetchData();
  }, []);

  const handleTopicClick = (topicId) => {
    setSelectedTopic(topicId);
  };

  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(photoId)) {
        return prevFavourites.filter(id => id !== photoId);
      } else {
        return [...prevFavourites, photoId];
      }
    });
  };

  const filteredPhotos = selectedTopic
    ? photos.filter(photo => photo.topics.some(topic => topic.id === selectedTopic))
    : photos;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favourites={favourites} />
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      <PhotoList photos={filteredPhotos} onToggleFavourite={toggleFavourite} favourites={favourites} />
    </div>
  );
};

export default HomeRoute;