import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import { data } from './data';

function App() {
  const [movies, setMovies] = useState(data);
  return (
    <div className="App">
    <MovieList list={movies} />
    </div>
  );
}

export default App;
