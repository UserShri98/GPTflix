import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearch=()=>{
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full bg-black -z-10">
 <img className="h-full w-full object-cover" src={BG_URL} alt="logo"/>

      </div>      
       <GptSearchBar/>
       <GptMovieSuggestions/>
        </div>
    )
}
export default GptSearch;