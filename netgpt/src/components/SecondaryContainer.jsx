import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div>
      {movies?.nowPlayingMovies && (
        <>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.nowPlayingMovies} />
          <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
         <MovieList title="Horror" movies={movies.nowPlayingMovies} />

        </>
      )}
    </div>
  );
};

export default SecondaryContainer;
