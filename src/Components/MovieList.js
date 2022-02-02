import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {
  return <div className='movie-list'  >
{
   React.Children.toArray(props.list.map((el) => <MovieItem item={el}  del={props.delete} update={props.update} /> ))
}
  </div>;
};

export default MovieList;
