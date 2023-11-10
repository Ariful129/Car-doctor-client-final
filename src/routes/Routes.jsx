import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../shared/ErrorPage";
import Login from "../pages/login/Login";
import SignUp from "../pages/singnup/SignUp";
import BookService from "../pages/checkout/BookService";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/details/Details";
import Bookings from "../pages/checkout/Bookings";
import Admin from "../pages/checkout/Admin";
import AddProduct from "../pages/addproduct/AddProduct";
import BuyProd from "../pages/buy/BuyProd";
import MyProduct from "../pages/myproduct/MyProduct";
import AddService from "../pages/addservice/AddService";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
          path:'/book/:id',
          element:<PrivateRoute><BookService></BookService></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-final-cyan.vercel.app/services/${params.id}`)
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-final-cyan.vercel.app/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/admin',
          element:<PrivateRoute><Admin></Admin></PrivateRoute>
        },
        {
          path:'/addproduct',
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:'/buy/:id',
          element:<PrivateRoute><BuyProd></BuyProd></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-final-cyan.vercel.app/addprodutcs/${params.id}`)
        },
        {
          path:'/myproduct',
          element:<PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        },
        {
          path:'/addservice',
          element:<PrivateRoute><AddService></AddService></PrivateRoute>
        }

      ]
    },
  ]);

  export default router;