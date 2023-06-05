import {createBrowserRouter} from "react-router-dom";
import Main from "../Main";
import Home from "../../Home/Home";
import Login from "../../LogingLayout/Login";
import Register from "../../LogingLayout/Register";
import Bookings from "../../pages/Bookings";
import Dashboard from "../../Dashboard/Dashboard";
import Book from "../../Dashboard/Book";
import BookingList from "../../Dashboard/BookingList";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                // loader:()=>fetch('')
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
            {
              path:'/bookings/:id',
              element:<Bookings></Bookings>
            }
        ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'book',
          element:<Book></Book>
        },
        {
          path:'bookinglist',
          element:<BookingList></BookingList>
        }
      ]
    }
  ])
export default router;