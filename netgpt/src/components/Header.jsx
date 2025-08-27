import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };


   useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
      navigate("/browse")
    } else {
      // User is signed out
      // ...
      dispatch(removeUser())
      navigate("/")
    }
  });
    },[])

    const handleGptSearchClick=()=>{
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange=(e)=>{
      dispatch(changeLanguage(e.target.value))
    }

  return (
<div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-2 md:py-4 w-full absolute z-10 bg-gradient-to-b from-black">
      {/* LEFT: Netflix Logo */}
      <img
        className="w-24 md:w-40"
        src={LOGO_URL}
        alt="logo"
      />

      {/* RIGHT: User profile + Sign Out button */}
      {user && (
        <div className="flex items-center mt-2 md:mt-0">
         { showGptSearch && <select className="p-1 md:p-2 m-1 md:m-2 bg-gray-500 text-white text-xs md:text-base" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}

          </select>}
          <button className="text-white p-1 md:p-2 md:py-2 px-2 md:px-4 m-1 md:mx-4 md:my-2 bg-purple-800 rounded-lg text-xs md:text-base"
          onClick={handleGptSearchClick}
          >{showGptSearch?"Homepage":"GPT Search"}</button>
           <button
            onClick={handleSignOut}
            className="text-white bg-red-700 px-2 md:px-4 py-1 md:py-2 rounded-md text-xs md:text-base"
          >
            Sign Out
          </button>
          <img
            src={
              user.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user"
            className="hidden md:block w-8 h-8 md:w-10 md:h-10 rounded-full md:mr-4 p-1 md:p-2"
          />
         
        </div>
      )}
    </div>
  );
};

export default Header;
