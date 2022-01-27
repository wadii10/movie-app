import React from 'react';
import StarRating from './StarRating';

const Search = ({text, handleChange, handleChangeRating, rating}) => {
  return <div>
      <input placeholder='search' value={text} onChange={(e) => handleChange(e.target.value)}  />
      <StarRating handleRating={handleChangeRating} rating={rating} />
  </div>;
};

export default Search;
