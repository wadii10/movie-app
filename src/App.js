import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import { data } from "./data";
import AddMovie from "./Components/AddMovie";
import Search from "./Components/Search";

function App() {
  const [movies, setMovies] = useState(data);

  //delete a movie card
  const handleDelete = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };

  //add movie
  const add = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <header>
        <Search />
        <AddMovie add={add} />
      </header>
      <MovieList list={movies} delete={handleDelete} />
    </div>
  );
}

export default App;
