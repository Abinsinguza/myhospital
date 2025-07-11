import logo from "../images/icon.png";
import { NavLink } from "react-router-dom";
function Registered() {
  return (
    <div className="flex items-center justify-center w-10/12 h-screen">
      <div className="rounded-2xl bg-white  w-full justify-center w- h-10/12 max-w-screen-x1 shadow-[0_25px_50px_-6px_rgba(59,130,246,0.5)] p-10">
        <div class="flex items-center justify-center mb-2">
          <img class="h-10 w-auto" src={logo} alt="" />
          <h2 class="text-3xl font-bold text-blue-700 ml-2">
            Citycare General Hospital
          </h2>{" "}
          <br />
        </div>
        <div className="registered">
          <div className="flex items-center justify-center mb-42"></div>
          <h2 className="font-semibold mb-4">
            Thank you for registering with CityCare Hospital
          </h2>

          <p className="text-gray-900 text-lg font-thin mb-20">
            A confirmation email with you login details will be sent on your
            email alex@gmail.com once your account is approved.
          </p>

          <p className="text-blue-500 font-semibold">
            Thank you for working with CityCare General Hospital.
          </p>
          <p>We look forward to serving with you.</p>

          <div className="flex justify-center mt-60 space-x-2">
           <p> Already have an account?</p>
            <NavLink to="/login" className="space-x-2   hover:text-blue-500 font-semibold">
            Login here
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registered;