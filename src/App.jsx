
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Register from './pages/Register';
import Appointment from './pages/Appointment';
import Registered from './pages/Registered';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Datepicker from './components/Datepicker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const router = createBrowserRouter([
//   {
//     element: <Appointment />,
//     children: [
//       {
//         path: "/",
//         element: <Login />
//       },
//       // {
//       //   path: "/login",
//       //   element: <Login />
//       // },
//       // {
//       //   path: "/appointment",
//       //   element: <Appointment />
//       // }
//     ]
//   }
// ]);
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registered" element={<Registered />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
