import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import { data } from "./data";
import AddMovie from "./Components/AddMovie";
import Search from "./Components/Search";

function App() {
  const [movies, setMovies] = useState(data);
  //state for search
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  //delete a movie card
  const handleDelete = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };

  //add movie
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  //update movie(edit)
  const update = (updateMovie) => {
    setMovies( movies.map( (movie) => movie.id === updateMovie.id ? { ...movie, ...updateMovie } : movie )  ) ;
  }

  //handle change TextSearch
  const handleCahngeSearch = (x) => {
    setText(x);
  };
  //handle change RateSearch
  const handleChangeRating = (a) => {
    setRating(a);
  };


  return (
    <div className="App">
      <header>
        <Search text={text} handleChange={handleCahngeSearch} rating={rating}  handleChangeRating={handleChangeRating} />
        <AddMovie add={add} />
      </header>
      <MovieList list={ movies.filter(movie => movie.name.toLowerCase().includes(text.toLowerCase()) 
        && movie.rating>= rating) }  delete={handleDelete} update={update}  />
    </div>
  );
}

export default App;
