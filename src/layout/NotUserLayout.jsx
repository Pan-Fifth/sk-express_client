import React from 'react'
import { Outlet } from 'react-router-dom'
import NotUserHeader from '../components/NotUser/NotUserHeader'
import Footer from '../components/Footer'
const NotUserLayout = () => {
  return (
    <div className='h-screen'>
        <NotUserHeader/>
        <div className=' h-[calc(100%-160px)] overflow-auto'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default NotUserLayout