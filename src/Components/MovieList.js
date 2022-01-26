import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
  return <div className='movie-list' >
{
    props.list.map((el,i) => <MovieItem item={el} key={i} del={props.delete} /> )
}
  </div>;
};

export default MovieList;
