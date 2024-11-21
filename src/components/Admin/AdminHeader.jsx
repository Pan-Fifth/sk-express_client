import React from 'react'
import useUserStore from '../../stores/user-store'
import { useNavigate } from 'react-router-dom'
const AdminHeader = () => {
  const logout = useUserStore(state=>state.logout)
  const navigate = useNavigate()
  const hdlLogout = () =>{
    logout()
    navigate('/')
  }
  return (
    <div className='h-[160px] bg-red-500'>
    <div className='flex flex-col items-center gap-2 '>
    <p className='text-white text-6xl text-center mt-3 font-bold'>Admin Header</p>
    <button className='btn btn-warning w-[80px] self-end mr-10'  onClick={hdlLogout}>logout</button>
    </div>

    </div>
  )
}

export default AdminHeader