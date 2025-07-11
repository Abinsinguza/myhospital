
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Appointment from './pages/Appointment';

export default function Layout() {
  return (
    <>
      <Appointment />
      <main>
        <Outlet />
      </main>
    </>
  );
}