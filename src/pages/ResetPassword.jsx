import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import displayImg from '../pictures/forgetPassword.jpg'
import useUserStore from '../stores/user-store'
import { useParams } from 'react-router-dom'


const ResetPassword = () => {
const {token} = useParams() 
  const [body,setBody] = useState({
    password:'',
    confirmPassword:''
  })
  const resetPassword = useUserStore(state=>state.resetPassword)

  const hdlInput =(e)=>{  
    setBody(prv=>({...prv,[e.target.name]:e.target.value}))
  }
  const hdlClick = async() => {
    if(body.password !== body.confirmPassword){
        alert('password and confirm password not match')
    }else{
        await resetPassword({
            token: token,
            password: body.password
        })
        
    }
  }
  
  return (
    <div className="h-full bg-gray-300 flex flex-col">

    {/* Main Content */}
    <main className="flex-grow flex items-center justify-center px-4 my-20">
      <div className=" bg-red-500  rounded-3xl shadow-lg p-8 w-full h-[90%] max-w-4xl  flex ">
        {/* Left side - Login Form */}
        <div className="w-1/2 pr-8 flex flex-col gap-2 justify-evenly">
        <div>
          <h1 className="text-5xl text-white font-bold mb-2 ">No worries</h1>
          <p className="text-gray-800 font-bold mb-8">please provide your new password and confirm</p>
        </div>
          <div>
            <div className="mb-4 flex flex-col gap-3">
              
              <input 
                onChange={hdlInput}
                type="text" 
                placeholder="Password"
                name='password'
                className="w-full h-[60px] pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input 
                onChange={hdlInput}
                type="text" 
                placeholder="Confirm Password"
                name='confirmPassword'
                className="w-full h-[60px] pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            
            <button 
              onClick={hdlClick}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Submit
            </button>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have account?</p>
            <Link to = {'/signup'}><button className="mt-2 text-white hover:underline">Sign up</button></Link><span> or </span>
            <Link to = {'/login'}><button className="mt-2 text-white hover:underline">Login</button></Link>
          </div>
        </div>

        {/* Right side - SK Express Logo */}
        <div className="w-1/2 flex items-center justify-center" 
        style={{
          backgroundImage: `url(${displayImg})`,
          backgroundSize: "cover",
          }}>
          <div className='text-center px-3 h-16 flex bg-slate-50 '>
            <h2 className='text-5xl font-bold text-red-600 my-auto'>Forget password</h2>
          </div>
        </div>
      </div>
    </main>

   
  </div>
  )
}

export default ResetPassword