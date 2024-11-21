import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../components/User/UserHeader'
import Footer from '../components/Footer'
import useUserStore from '../stores/user-store'
const UserLayout = () => {
  const getInfo = useUserStore(state=>state.getInfo)
  const token = useUserStore(state=>state.token)
  useEffect(()=>{
    getInfo(token)
  },[])
  return (
    <div className='h-screen'>
      <UserHeader />
      <div className=' h-[calc(100%-160px)] overflow-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default UserLayout