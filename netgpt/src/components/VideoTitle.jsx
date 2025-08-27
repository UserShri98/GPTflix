
const VideoTitle=({title,overview})=>{
     return (
        <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
     <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
     <p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
     <div className="mt-4 md:mt-0">
        <button className="bg-white text-black py-2 px-6 md:p-4 md:px-12 text-lg rounded-lg hover:bg-opacity-80"> ▶️ Play</button>
        <button className= "hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 hover:bg-opacity-80">More Info</button>

     </div>
        </div>
     )
}
export default VideoTitle;