import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

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

  return (
    <div className="flex justify-between items-center px-8 py-4 w-screen bg-gradient-to-b from-black z-10 absolute">
      {/* LEFT: Netflix Logo */}
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* RIGHT: User profile + Sign Out button */}
      {user && (
        <div className="flex items-center">
          <img
            src={
              user.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="user"
            className="w-10 h-10 rounded-full mr-4"
          />
          <button
            onClick={handleSignOut}
            className="text-white bg-red-700 px-4 py-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
