import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../../pictures/SK-logo-only.png'
import useUserStore from '../../stores/user-store'

function UserHeader() {
    const logout = useUserStore(state=>state.logout)
    const navigate = useNavigate()
    const hdlLogout=()=>{
        logout()
        navigate('/')
    }
  return (
        <header className="bg-white shadow-md h-[60px] flex justify-between items-center">
          
            <div className=' ml-6'>
            <Link to = {'/user'}><img src={logo} alt="SK EXPRESS Logo" className="h-6" /></Link>
            </div>
            <ul className=" space-x-6 text-gray-800 flex mr-6">
              <li className="hover:text-red-500 transition"><Link to = {''}> Home</Link></li>
              <li className="hover:text-red-500 transition"><Link to = {'product'}> Product</Link></li>
              <li className="hover:text-red-500 transition"><Link to = {'contact'}> Contact</Link></li>
              <li className="hover:text-red-500 transition"><Link to = {'mypage'}>  My page</Link></li>
              <li className="hover:text-red-500 transition"><button onClick={hdlLogout}>Log out</button></li>
            </ul>
          
        </header>
    
  )
}

export default UserHeader