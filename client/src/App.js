import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Movie from './Movies/Movie';
import MovieList from'./Movies/MovieList';
import SavedList from './Movies/SavedList';

// import MovieCard from './Movies/MovieCard';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path='/movies/:id' 
      render={props => <Movie {...props} addToSavedList={addToSavedList}/>} />
   
    </div>
  );
};

export default App;