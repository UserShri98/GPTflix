import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{
    console.log(movies)
    return (
        <div className="px-4 md:px-6 "> 
                <h1 className="text-lg md:text-3xl text-white py-2 md:py-4">{title}</h1>

     <div className=" flex overflow-x-scroll no-scrollbar">
        <div className="flex">
            {movies?.length > 0 && movies.map(movie=><MovieCard posterPath={movie.poster_path} key={movie.id} />)}
 
        </div>
    </div>
        </div>
    )
}
export default MovieList;