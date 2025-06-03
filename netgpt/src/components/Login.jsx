import { useRef, useState } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from "react-redux";


const Login=()=>{

   const dispatch=useDispatch();
     
   const [signInForm,setSignInForm]=useState(true);

   const [errorMessage,setErrorMessage]=useState()

   const name=useRef(null);
   const email=useRef(null);
   const password=useRef(null);

   const handleToggleForm=()=>{
    setSignInForm(!signInForm)
   }

   const handleValidate=()=>{
    // console.log(email.current.value);
    // console.log(password.current.value);

 const message=validateCredentials(email.current.value,password.current.value)

   if(!signInForm){

createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name.current.value, photoURL: "https://img.freepik.com/free-psd/cute-brown-white-dog-scene_23-2150179279.jpg?semt=ais_hybrid&w=740"
}).then(() => {
       const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
}).catch((error) => {
     setErrorMessage(error.message)
});


    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
   }else{
       signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
   }



 setErrorMessage(message)
   }

    return(
        <div>
          <Header/>
      <div className="absolute">
 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="logo"/>

      </div>      
<form onSubmit={(e)=>e.preventDefault()}className="w-4/12 absolute p-12 my-25 mx-auto right-0 left-0 text-white bg-black/75 rounded-lg">
        
     <h1 className="text-3xl font-bold">{signInForm?"Sign In":"Sign Up"}</h1>

     {!signInForm && (<input 
        type="text"  
        placeholder="Enter your name" 
        className="p-4 my-4 w-full bg-gray-800"
        />)}

        <input 
        type="text" 
        ref={email} 
        placeholder="Enter email or mobile number" 
        className="p-4 my-4 w-full bg-gray-800"
        />

        <input 
        type="password" 
        ref={password}
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-800"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleValidate}>{signInForm?"Sign In":"Sign Up"}</button>
        <p className="cursor-pointer" onClick={handleToggleForm}>{signInForm?"New to Netflix?Sign Up now":"Already registred?Sign In now"}</p>
      </form>
      </div>
        
    )
}

export default Login;