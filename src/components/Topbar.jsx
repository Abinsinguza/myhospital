import logo from '../images/icon.png';
function Topbar() {
  return (
   <div className="bg-white shadow-md sticky top-0 z-50">
  <div className="container  px-4 py-3 flex justify-between items-center">
    {/* Hospital Logo - Starts from margin */}
    <div className="flex items-center">
      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
       <img 
              src={logo} 
              alt="Hospital Icon"
              className="w-full h-full object-cover"
            />
      </div>
      <h1 className="text-xl font-bold text-gray-800 whitespace-nowrap">Citycare General Hospital</h1>
    </div>

    {/* Search Bar - Centered */}
    <div className="relative w-1/3 mx-4">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <div className="absolute right-3 top-2.5 text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>

    {/* Navigation Links - Right aligned */}
    <div className="flex space-x-6">
      <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Dashboard</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Setting</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Log</a>
      <a href="#" className="text-gray-600 hover:text-blue-600">Report</a>
    </div>
  </div>
</div>
  );
}

export default Topbar;