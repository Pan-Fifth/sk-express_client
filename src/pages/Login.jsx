// import React, { useState } from 'react'
// import { Link , useNavigate } from 'react-router-dom'
// import useUserStore from '../stores/user-store'

// const API_URL = import.meta.env.VITE_API_URL

// const Login = () => {

//   console.log(API_URL)
//   const login = useUserStore(state=>state.login)
//   const navigate = useNavigate()
//   const [input,setInput] = useState({
//       email:'',
//       password:''
//   })

//   const hdlChange =(e)=>{
//     setInput(prv=>({...prv,[e.target.name]:e.target.value}))
//   }

//   const hdlLogin =async(e)=>{
//     try {
//       e.preventDefault()
//       const role = await login(input)
//       if(role){
//         roleRedirect(role)
//       }
      
//     } catch (err) {
//       alert(err.response.data.message)
//     }
//   }

//   const roleRedirect = (role)=>{
//     console.log(role);
//     if(role === "ADMIN"){
//       navigate('/admin')
//     }else{
//       navigate('/user')
//     }
//   }
  
//   return (
//      <div className="h-full bg-red-500 flex flex-col">

//       {/* Main Content */}
//       <main className="flex-grow flex items-center justify-center px-4 my-20">
//         <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl  flex ">
//           {/* Left side - Login Form */}
//           <div className="w-1/2 pr-8">
//             <h1 className="text-4xl font-bold mb-2 ">Welcome</h1>
//             <p className="text-gray-600 mb-8">We are glad to see you back with us</p>
            
//             <form onSubmit={hdlLogin}>
//               <div className="mb-4 relative">
                
//                 <input 
//                   onChange={hdlChange}
//                   type="text" 
//                   placeholder="Email"
//                   name='email' 
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//               </div>
//               <div className="mb-6 relative">
                
//                 <input 
//                   onChange={hdlChange}
//                   type="password" 
//                   placeholder="Password"
//                   name='password' 
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />
//               </div>
//               <button 
//                 type='submit'
//                 className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
//               >
//                 Login
//               </button>
//             </form>
            
//             <div className="mt-4 text-center">
//               <p className="text-gray-600">Don't have account?</p>
//               <Link to = {'/signup'}><button className="mt-2 text-red-600 hover:underline">Sign up</button></Link>
//               <p className="mt-2 text-sm text-gray-500">
//                 <Link to={'/forget-password'} href="#" className="hover:underline" >Forgot password</Link>
//               </p>
//             </div>
//           </div>

//           {/* Right side - SK Express Logo */}
//           <div className="w-1/2 flex items-center justify-center" 
//           style={{
//             backgroundImage: `url("https://picsum.photos/id/363/1000/600")`,
//             backgroundSize: "cover",
//             }}>
//             <div className='text-center px-3 h-16 flex bg-slate-50 '>
//               <h2 className='text-5xl font-bold text-red-600 my-auto   '>SK EXPRESS</h2>
//               {/* <p className="bg-slate-700 text-xl text-gray-100">บริการนำเข้าและสั่งซื้อสินค้าจากญี่ปุ่น</p> */}
//             </div>
//           </div>
//         </div>
//       </main>

     
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../stores/user-store";

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
  console.log(API_URL);
  const login = useUserStore((state) => state.login);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlLogin = async (e) => {
    try {
      e.preventDefault();
      const role = await login(input);
      if (role) {
        roleRedirect(role);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const roleRedirect = (role) => {
    console.log(role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="h-full bg-red-500 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 my-20">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl flex flex-col md:flex-row">
          {/* Left side - Login Form */}
          <div className="w-full md:w-1/2 pr-8">
            <h1 className="text-4xl font-bold mb-2">Welcome</h1>
            <p className="text-gray-600 mb-8">We are glad to see you back with us</p>

            <form onSubmit={hdlLogin}>
              <div className="mb-4 relative">
                <input
                  onChange={hdlChange}
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="mb-6 relative">
                <input
                  onChange={hdlChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">Don't have an account?</p>
              <Link to={"/signup"}>
                <button className="mt-2 text-red-600 hover:underline">Sign up</button>
              </Link>
              <p className="mt-2 text-sm text-gray-500">
                <Link to={"/forget-password"} className="hover:underline">
                  Forgot password
                </Link>
              </p>
            </div>
          </div>

          {/* Right side - SK Express Logo */}
          <div
            className="hidden md:flex w-full md:w-1/2 items-center justify-center"
            style={{
              backgroundImage: `url("https://picsum.photos/id/363/1000/600")`,
              backgroundSize: "cover",
            }}
          >
            <div className="text-center px-3 h-16 flex bg-slate-50">
              <h2 className="text-5xl font-bold text-red-600 my-auto">SK EXPRESS</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
