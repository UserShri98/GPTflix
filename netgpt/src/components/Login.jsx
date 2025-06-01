import Header from "./Header";


const Login=()=>{
    return(
        <div>
          <Header/>
      <div className="absolute">
 <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" alt="logo"/>

      </div>      
<form className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 text-white bg-black/70 rounded-lg">
        <input type="text"  placeholder="Enter email or mobile number" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign Up</button>
      </form>
      </div>
        
    )
}

export default Login;