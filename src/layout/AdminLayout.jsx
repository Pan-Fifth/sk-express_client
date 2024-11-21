import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/Admin/AdminHeader'
import Footer from '../components/Footer'
import AdminSideBar from '../components/Admin/AdminSideBar'
import useOrderStore from '../stores/order-store'
import useUserStore from '../stores/user-store'
import useBuyerStore from '../stores/buyer-store'
const AdminLayout = () => {
    useEffect(() => {
    adminGetOrder(token)
    getBuyer(token)
    getAllUser(token)
  }, [])

  const adminOrders = useOrderStore(state=>state.adminOrders)
  const getAllUser = useUserStore(state=>state.getAllUser)
  const getBuyer = useBuyerStore(state => state.getBuyer)
  const adminGetOrder = useOrderStore(state => state.adminGetOrder)
  const token = useUserStore(state=>state.token)
  console.log("admin layout");
  console.log(adminOrders);
  return (
    <div className='h-screen'>
      <AdminHeader />
      <div className=' h-[calc(100%-260px)] flex'>
        <AdminSideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AdminLayout
