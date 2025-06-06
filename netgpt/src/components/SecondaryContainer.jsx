import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      {movies?.nowPlayingMovies && (
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Upcoming" movies={movies.nowPlayingMovies} />
         <MovieList title="Horror" movies={movies.nowPlayingMovies} />

        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
