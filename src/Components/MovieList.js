import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({list}) => {
  return <div className='movie-list' >
{
    list.map((el,i) => <MovieItem item={el} key={i} /> )
}
  </div>;
};

export default MovieList;
