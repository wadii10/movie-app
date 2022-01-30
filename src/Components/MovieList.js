import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
  return <div className='movie-list' >
{
    props.list.map((el,i) => <MovieItem item={el} key={i} del={props.delete} update={props.update} /> )
}
  </div>;
};

export default MovieList;
