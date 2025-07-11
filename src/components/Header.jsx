import { FaCalendarAlt } from 'react-icons/fa';
import logo from "../images/icon.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Added Link component
import { NavLink } from "react-router";

export default function Header() {
   const navigate = useNavigate();
  return (
     
    <div className=" flex fixed w-full z-10 top-5 left-0 px-4 space-x-96 ">
      <NavLink to="/login" className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className=" ml-15 flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          // onClick={() => navigate('/')} // Navigate to home page
        >
          
          <img className="h-10 w-auto" src={logo} alt="Logo" />
          <span className="text-blue-700 font-bold text-2xl">
            Citycare General Hopital
          </span>
        </div></NavLink>
    
           {/* <div 
            className="ml-15 flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/login')} // Navigate to login page
          >
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <span className="text-blue-700 font-bold text-2xl">
              Citycare General Hospital
            </span>
          </div> */}
        <div>

        </div>
      <div className="max-w-6xl mx-auto flex py-3 items-end space-x-20 ">
        

        {/* Nav Links */}
        <nav className="flex items-center space-x-7 text-sm font-medium text-gray-700">
        
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#" className="hover:text-blue-600">TEAM</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="flex items-center space-x-2 bg-blue-400 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaCalendarAlt />
          <span className="font-semibold">Book Appointment</span>
        </a>
      </div>
    </div>
  );
}

