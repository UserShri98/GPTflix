import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      console.log(movieId);

      const filteredData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);
};

export default useMovieTrailer;
