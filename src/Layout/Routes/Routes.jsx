import {createBrowserRouter} from "react-router-dom";
import Main from "../Main";
import Home from "../../Home/Home";
import Login from "../../LogingLayout/Login";
import Register from "../../LogingLayout/Register";
import Bookings from "../../pages/Bookings";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/total-services')
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
    }
  ])
export default router;