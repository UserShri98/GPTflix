import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
    const dispatch=useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
<div className="flex justify-between items-center px-8 py-4 w-screen z-10 absolute">
      {/* LEFT: Netflix Logo */}
      <img
        className="w-40"
        src={LOGO_URL}
        alt="logo"
      />

      {/* RIGHT: User profile + Sign Out button */}
      {user && (
        <div className="flex items-center">
          <button className="text-white p-2 py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg"
          onClick={handleGptSearchClick}
          >GPT Search</button>
           <button
            onClick={handleSignOut}
            className="text-white bg-red-700 px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
          <img
            src={
              user.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user"
            className="w-10 h-10 rounded-full mr-4 p-2"
          />
         
        </div>
      )}
    </div>
  );
};

export default Header;
