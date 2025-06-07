import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";



const GptSearchBar=()=>{

    const langKey=useSelector(store=>store.config.lang);

    const searchText=useRef();

    const handleGptSearchClick=async()=>{
        console.log(searchText.current.value);

const gptQuery="Act as a movie recommendation system and suggest some movies for the query:" +searchText.current.value+". only give me names of 5 movies,example seperated like the example of movies given ahead, Examples:Gadar,Sholay,Golmaal,Koi Mil Gaya"; 

         const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  console.log(gptResults.choices)
    }
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
             <input
             type="text"
             ref={searchText}
             className="p-4 m-4 col-span-9 text-white"
             placeholder={lang[langKey].gptSearchPlaceholder}
             />
             <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" 
             onClick={handleGptSearchClick}
             >{lang[langKey].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;