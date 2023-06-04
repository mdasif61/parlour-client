import {createBrowserRouter} from "react-router-dom";
import Main from "../Main";
import Home from "../../Home/Home";
import Login from "../../LogingLayout/Login";
import Register from "../../LogingLayout/Register";

  const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            }
        ]
    }
  ])
export default router;