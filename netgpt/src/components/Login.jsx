import { useState } from "react";
import Header from "./Header";


const Login=()=>{

   const [signInForm,setSignInForm]=useState(true);

   const handleToggleForm=()=>{
    setSignInForm(!signInForm)
   }


    return(
        <div>
          <Header/>
      <div className="absolute">
 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="logo"/>

      </div>      
<form className="w-4/12 absolute p-12 my-25 mx-auto right-0 left-0 text-white bg-black/75 rounded-lg">
        
     <h1 className="text-3xl font-bold">{signInForm?"Sign In":"Sign Up"}</h1>

     {!signInForm && <input 
        type="text"  
        placeholder="Enter your name" 
        className="p-4 my-4 w-full bg-gray-800"
        />}

        <input 
        type="text"  
        placeholder="Enter email or mobile number" 
        className="p-4 my-4 w-full bg-gray-800"
        />

        <input 
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{signInForm?"Sign In":"Sign Up"}</button>
        <p className="cursor-pointer" onClick={handleToggleForm}>{signInForm?"New to Netflix?Sign Up now":"Already registred?Sign In now"}</p>
      </form>
      </div>
        
    )
}

export default Login;