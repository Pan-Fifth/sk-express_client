import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProtectRoute from './ProtectRoute'

//Not user
import NotUserLayout from '../layout/NotUserLayout'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Unauthorized from '../pages/Unauthorized'
import Notfound from '../pages/Notfound'

//user
import UserLayout from '../layout/UserLayout'
import MyPage from '../pages/MyPage'

//Admin
import AdminLayout from '../layout/AdminLayout'
import ForgetPassword from '../pages/ForgetPassword'
import ResetPassword from '../pages/ResetPassword'
import AllOrder from '../pages/Admin/AllOrder'
import OnProcess from '../pages/Admin/OnProcess'
import Complete from '../pages/Admin/Complete'
import Cancle from '../pages/Admin/Cancle'
import Customer from '../pages/Admin/Customer'
import Buyer from '../pages/Admin/Buyer'





const router = createBrowserRouter([
    {
      //normal path before login
        path:'/',
        element: <NotUserLayout/>,
        children:[
            {index: true, element:<Home/>},
            {path: 'product', element:<Product/>},
            {path: 'contact', element:<Contact/>},
            {path: 'signup', element:<Signup/>},
            {path: 'login', element:<Login/>},
            {path: 'forget-password', element:<ForgetPassword/>},
            {path: 'reset-password/:token', element:<ResetPassword/>},
            {path: 'unauthorized', element:<Unauthorized/>},
            {path: '*', element:<Notfound/>},
            
        ]

    },

    //path admin after login
    {
      path:"/admin",
      element: <ProtectRoute element = {<AdminLayout/>} allow={["ADMIN"]}/>,
      children:[
        {index: true,element:<AllOrder/>}, 
        {path:"onprocess",element:<OnProcess/>},
        {path:"complete",element:<Complete/>},
        {path:"cancle",element:<Cancle/>},
        {path:"customer",element:<Customer/>},
        {path:"buyer",element:<Buyer/>},
        {path: '*', element:<Notfound/>},
      ]
    },

    ///path user after login
    {
      path:"/user",
      element: <UserLayout/>,
      children:[
        {index: true,element:<Home/>},
        {path:'mypage',element:<MyPage/>},
        {path: 'product', element:<Product/>},
        {path: 'contact', element:<Contact/>},
        {path: '*', element:<Notfound/>},
      ]
    },

])


const AppRouters = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default AppRouters