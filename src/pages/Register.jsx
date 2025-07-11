import { useState } from 'react';
import logo from "../images/icon.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from 'react-icons/fa';
import { NavLink } from "react-router";
import { GoUpload } from "react-icons/go";

function Register() {
    const [activeTab, setActiveTab] = useState('basic');
    const [startDate, setStartDate] = useState(null);
     const [selectedValue, setSelectedValue] = useState('');
     const [selectedValue2, setSelectedValue2] = useState('');

      const tabs = [
    { id: 'basic', number: '1', label: 'Basic Information' },
    { id: 'employment', number: '2', label: 'Employment Information' },
    { id: 'qualifications', number: '3', label: 'Qualifications' }

    
  ];

  return (
    
    <div className="flex items-center justify-center w-11/12 h-screen">
      <div className="rounded-2xl bg-white  w-full justify-center w- h-10/12 max-w-screen-x1 shadow-[0_25px_50px_-6px_rgba(59,130,246,0.5)] p-10">
        <div class="flex items-center justify-center mb-2">
          <img class="h-10 w-auto" src={logo} alt="" />
          <h2 class="text-3xl font-bold text-blue-700 ml-2">
            Citycare General Hospital
          </h2>{" "}
          <br />
        </div>
        <p className="text-center text-xl font-bold text-gray-500 mb-11">
          Create New Account
        </p>
        
{/* 
        <div class=" mb-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-300 w-2/3 mx-auto">
          <ul class="flex flex-wrap -mb-px justify-center ">
            <li class="me-2">
                <span class="text-3xl  dark:text-blue-500">1</span>
              <a
                href="#"
                class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                aria-current="page">
                Basic Information
              </a>
            </li>
            <li class="me-2">
                 <span class="text-3xl">2</span>
              <a
                href="#"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                Employment Information 
              </a>
            </li>
            <li class="me-2">
                <span class="text-3xl">3</span>
              <a
                href="#"
                class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >
                Qualifications
              </a>
            </li>
          </ul>
        </div> */}
        {/* Tab Navigation */}
      <div class="mb-8 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-300 w-2/3 mx-auto">
        <ul class="flex flex-wrap -mb-px justify-center">
          {tabs.map(tab => (
            <li key={tab.id} class="me-2">
              <button
                onClick={() => setActiveTab(tab.id)}
                class={`inline-flex items-end justify-between p-1 border-b-2 rounded-t-lg ${activeTab === tab.id 
                  ? 'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500' 
                  : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
              >
                <span class={`text-3xl  mr-2 ${activeTab === tab.id ? 'dark:text-blue-500' : ''}`}>
                  {tab.number}
                </span>
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

       {/* Tab Content */}
      <div className="tab-content">

        {activeTab === 'basic' && (
                   <div className="basicinfo ">
            <div className="flex items-left mb-8 text-xl font-bold text-gray-600 mb-11">
                <p>Basic Information</p>
            </div>
            <div className="mb-8 text-left">
               
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <p className="mb-2">First name *</p>
            <label for="first_name" class="mb-10"></label>
            <input type="text" id="first_name" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="Enter your first name" required />
        </div>
        <div>
            <p className="mb-2">Date of birth *</p>
                <div className="relative ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-400"
          placeholderText="Select your date of birth"
          required
        />
        <div className="absolute inset-y-0 right-65 flex items-center pl-3 pointer-events-none text-gray-400">
          <FaRegCalendarAlt className="w-4 h-4" />
        </div>
      </div>
        </div>
        <div>
            <p className="mb-2">Last name *</p>
            <label for="first_name" class="mb-10"></label>
            <input type="text" id="first_name" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="Enter your last name" required />
        </div>
        <div>
             <p className="mb-2">Gender *</p>
  <div className="flex items-center space-x-6">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="male"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
        required
      />
      <span className="ml-2 text-gray-700">Male</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="gender"
        value="female"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
      />
      <span className="ml-2 text-gray-700">Female</span>
    </label>
  </div>
        </div>
       <div>
            <p className="mb-2">Email address *</p>
            <label for="first_name" class="mb-10"></label>
            <input type="text" id="first_name" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="Enter your email address" required />
        </div>
        <div>
            <p className="mb-2">Telephone Number *</p>
  <div className="flex">
    {/* Country Code Dropdown */}
    <button
      type="button"
      className="shrink-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-l-lg bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
    >
      <span className="mr-2"></span>
      +256
      <svg className="w-3 h-3 ml-2" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    
    {/* Phone Input */}
    <input
      type="tel"
      className="w-full px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      placeholder="777-000-000"
      required
    />
  </div>
        </div>
    </div>

   
 <div className="flex justify-end mt-6">
  <button 
    type="submit" 
    className="px-5 py-2.5 text-sm font-medium text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
  >
    NEXT STEP
  </button>
</div>
</form>

            </div>

        </div>


        )}

        {activeTab === 'employment' && (  
                           <div className="employmentinfo ">
            <div className="flex items-left mb-8 text-xl font-bold text-gray-600 mb-11">
                <p>Employment Information</p>
            </div>
            <div className="mb-8 text-left">
               
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div className='relative'>
           <p className="mb-2">Role *</p>
        <div className="relative">
             <select 
    id="roles" 
   value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
      className={`w-60 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none ${
        selectedValue === '' ? 'text-gray-400' : 'text-gray-900'
      }`}
      required
    >
    <option value="" disabled selected className="text-gray-400">select your role</option>
    <option value="4" className="text-gray-900">Doctor</option>
    <option value="3" className="text-gray-900">Nurse</option>
    <option value="2" className="text-gray-900">Pharmacist</option>
    <option value="1" className="text-gray-900">Admin</option>
    <option value="5" className="text-gray-900">Receptionist </option>
  </select>
   <div className="pointer-events-none absolute inset-y-0 right-65 flex items-center pr-3 text-gray-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </div>

        </div>
 
        </div>
        <div>
            <p className="mb-2">Join Date *</p>
                <div className="relative ">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:ring-blue-400"
          placeholderText="Select your join date"
          required
        />
        <div className="absolute inset-y-0 right-65 flex items-center pl-3 pointer-events-none text-gray-400">
          <FaRegCalendarAlt className="w-4 h-4" />
        </div>
      </div>
        </div>
        <div>
            <p className="mb-2">Slect your currrent employment Status *</p>

<div class="flex items-center mb-2">
   <input
        type="radio"
        name="employment_status"
        value="Active"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
        required
      />
      <span className="ml-2 text-gray-700">Active</span>
</div>
<div class="flex items-center">
    <input
        type="radio"
        name="employment_status"
        value="On Leave"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
        required
      />
        <span className="ml-2 text-gray-700">On Leave</span>
</div>

            
            {/* <input type="text" id="first_name" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="John" required /> */}
        </div>
        <div>
             <p className="mb-2">Select the shift*</p>
  <div className="flex items-center space-x-6">
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="shift"
        value="Morning"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
        required
      />
      <span className="ml-2 text-gray-700">Morning</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="radio"
        name="shift"
        value="Evening"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
      />
      <span className="ml-2 text-gray-700">Evening</span>
    </label>
     <label className="inline-flex items-center">
      <input
        type="radio"
        name="shift"
        value="Night"
        className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300"
      />
      <span className="ml-2 text-gray-700">Night</span>
    </label>
  </div>
        </div>
        
       <div className='relative'>
        <p className="mb-2">Department *</p>
  <div className="relative">
    <select
      id="departments"
      value={selectedValue2}
      onChange={(e) => setSelectedValue2(e.target.value)}
      className={`w-60 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none ${
        selectedValue2 === '' ? 'text-gray-400' : 'text-gray-900'
      }`}
      required
    >
      <option value="" disabled className="text-gray-400">select your department</option>
      <option value="1" className="text-gray-900">Emergency Medicine</option>
      <option value="2" className="text-gray-900">Cardiology</option>
      <option value="3" className="text-gray-900">Pediatrics</option>
      <option value="4" className="text-gray-900">Orthopedics</option>
      <option value="5" className="text-gray-900">Neurology</option>
      <option value="6" className="text-gray-900">Oncology</option>
      <option value="7" className="text-gray-900">Obstetrics & Gynecology</option>
      <option value="8" className="text-gray-900">General Surgery</option>
      <option value="9" className="text-gray-900">Radiology</option>
      <option value="10" className="text-gray-900">Anesthesiology</option>
      <option value="11" className="text-gray-900">Intensive Care Unit (ICU)</option>
      <option value="12" className="text-gray-900">Pathology</option>
      <option value="13" className="text-gray-900">Physical Therapy</option>
      <option value="14" className="text-gray-900">Pharmacy</option>
      <option value="15" className="text-gray-900">Laboratory</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-65 flex items-center pr-3 text-gray-400">
      <svg className="w-4 h-4" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
    </div>
  </div>
  
        </div>
   
    </div>

   <div className="flex justify-end mt-6">
  <button 
    type="submit" 
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
  >
    NEXT STEP
  </button>
</div>
    
</form>

            </div>

        </div>

            
        )}

        {activeTab === 'qualifications' &&(
                               <div className="qualifications">
            <div className="flex items-left mb-8 text-xl font-bold text-gray-600 mb-11">
                <p>Qualifications</p>
            </div>
            <div className="mb-8 text-left">
               
<form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <p className="mb-2">Acadamic Qualification</p>
            <label for="acadamic_qualification" class="mb-10"></label>
            <input type="text" id="acadamic_qualification" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="eg Bsc Nursing" required />
        </div>
        <div>
            <p className="mb-2">Speciality</p>
            <label for="speciality" class="mb-10"></label>
            <input type="text" id="speciality" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="Enter your Speciality" required />
        </div>
     
        <div>
            <p className="mb-2">License Number</p>
            <label for="license_number" class="mb-10"></label>
            <input type="text" id="license_number" className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-2 focus:ring-blue-400" placeholder="eg AHPC/PH/1234" required />
        </div>     
   
<div>
            <p className="mb-2">Acadamic Documents</p>
            <div class="flex items-center justify-center w-full mb-2">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50 dark:hover:bg-gray-100 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-200 dark:hover:border-gray-500">
        <div class="flex  items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="">Upload</span> All academic documents file</p>
        </div>

        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<p class="text-xs text-gray-500 dark:text-gray-400">Attached file size of your file should not exceed 10MB</p>
        </div>
    </div>

   
 <div className="flex justify-end mt-6">
  <NavLink to="/registered" className="">
   <button 
    type="submit" 
    className="px-5 py-2.5 text-sm font-medium text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
  >
    REGISTER
  </button>
    
    </NavLink>
 
</div>
</form>

            </div>
            

        </div>
        )}

      </div>

      

 
      </div>

    </div>
   

    
  );
}

export default Register;
