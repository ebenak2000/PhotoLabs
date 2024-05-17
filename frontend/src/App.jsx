import React from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import { FavoritesProvider } from './contexts/favoritesContext';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, actions } = useApplicationData();

  return (
    <FavoritesProvider>
      <div className="App">
        <HomeRoute
          photos={state.photos}
          topics={state.topics}
          onPhotoSelect={actions.onPhotoSelect}
          updateToFavPhotoIds={actions.updateToFavPhotoIds}
          onLoadTopic={actions.onLoadTopic}
          onClosePhotoDetailsModal={actions.onClosePhotoDetailsModal}
        />
      </div>
    </FavoritesProvider>
  );
};

export default App;