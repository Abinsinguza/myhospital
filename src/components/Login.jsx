import logo from '../images/icon.png';
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { NavLink } from "react-router";
function Login() {
  return (
   <div className="min-h-screen  flex items-center justify-center relative">


      {/* Login Card */}
      <div className="z-20 w-full h-full max-w-lg max-h-4/6 bg-white rounded-xl shadow-[0_25px_50px_-6px_rgba(59,130,246,0.5)] p-10">
        {/* Logo */}
        <div class="flex items-center justify-center mb-4">
           <img class="h-10 w-auto" src={logo} alt="" />
         <h2 class="text-3xl font-bold text-blue-700 ml-2">Citycare General Hospital</h2> <br />  
        </div>
        
        <p className="text-center text-xl font-bold text-gray-500 mb-11">Login into your account</p>

        {/* Email Input */}
        <div className="mb-8 text-left">
          <label className="font-bold text-gray-700 pd-12">Email address</label>
          <div className="relative ">
            <input
              type="email"
              placeholder="lasse@email.com"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" 
            />     
            <div className="absolute inset-y-0 right-0 flex items-center h-[calc(100%-7px)] w-10 rounded-md bg-blue-400 text-white">
              <MdOutlineEmail className="text-4xl justify-center " />
            </div> 
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-8 text-left">
          <label className="font-bold text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="absolute inset-y-0 right-0 flex items-center h-[calc(100%-0px)] w-10 rounded-md bg-blue-400 text-white">
              <MdLockOutline className="text-4xl justify-center " />
            </div> 
          </div>
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-gray-700 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Login Button */}
        <NavLink to="/dashboard" className="">
         <button className="w-full bg-blue-400 hover:bg-blue-200 text-white font-semibold py-2 rounded-lg mb-4">
          Log in
        </button>

        </NavLink>
       

        {/* Divider */}
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-gray-300 w-full" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <div className="h-px bg-gray-300 w-full" />
        </div>

        {/* Register Button */}
          <NavLink to="/register" className="">
            <button className="w-full border border-blue-500 text-blue-500 font-semibold py-2 rounded-lg hover:bg-blue-50">
          Register
        </button>
          </NavLink>
       
      </div>
    </div>
  );
}
export default Login;