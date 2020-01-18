import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import MovieCard from "./MovieCard";


const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data)
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div className='save-wrapper'>
        <Link key={movie.id} to={`/movies/${movie.id}`} >
          <MovieCard key={movie.id} movie={movie} />
          </Link>
          </div>

      ))}
    </div>
  );
}

export default MovieList;