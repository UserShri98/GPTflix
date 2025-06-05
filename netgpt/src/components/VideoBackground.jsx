import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {

     const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
    const dispatch=useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/552524/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        console.log(json)

        const filteredData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getMovieVideos()
    }, [])


    return (
        <div>
            <iframe 
            width="560"
             height="315" 
             src={"https://www.youtube.com/embed/VWqJifMMgZE?si=Evtt7fwYmI-bou3l"+trailerVideo?.key} 
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               ></iframe>
        </div>
    )
}
export default VideoBackground;