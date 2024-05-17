import { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favourites: [...state.favourites, action.payload.id],
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favourites: state.favourites.filter(id => id !== action.payload.id),
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photos: action.payload.photos,
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topics: action.payload.topics,
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.payload.photo,
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      selectedPhoto: null,
    };
  default:
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    selectedTopic: null,
    favourites: [],
    selectedPhoto: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async() => {
      const photosResponse = await fetch('http://localhost:8001/api/photos');
      const photosData = await photosResponse.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { photos: photosData } });

      const topicsResponse = await fetch('http://localhost:8001/api/topics');
      const topicsData = await topicsResponse.json();
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { topics: topicsData } });
    };
    fetchData();
  }, []);

  const handleTopicClick = (topicId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { topicId } });
  };

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const handleCloseModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  return {
    state,
    actions: {
      onPhotoSelect: handlePhotoClick,
      updateToFavPhotoIds: toggleFavourite,
      onLoadTopic: handleTopicClick,
      onClosePhotoDetailsModal: handleCloseModal,
    }
  };
};

export default useApplicationData;