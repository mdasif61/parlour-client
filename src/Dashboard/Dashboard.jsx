import { Link, Outlet } from "react-router-dom";
import { FaBook, FaShoppingCart, FaSms } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-200 items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white text-base-content">
          <li>
            <Link to='/dashboard/book'><FaShoppingCart/> Book</Link>
          </li>
          <li>
           <Link to='/dashboard/bookinglist'><FaBook/> Booking List</Link>
          </li>
          <li>
           <Link><FaSms/> Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
