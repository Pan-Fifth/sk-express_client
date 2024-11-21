import React, { useEffect, useState } from 'react'
import useOrderStore from '../../stores/order-store'
import ViewOrderDetail from './ViewOrderDetail'


const OrderHistory = ({token}) => {
  const orders = useOrderStore(state=>state.orders)
  const getAllOrder = useOrderStore(state=>state.getAllOrder)
  const defaultImg ="https://images.unsplash.com/photo-1516962126636-27ad087061cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const [showOrder,setShowOrder] = useState(orders)
  useEffect(()=>{
    getAllOrder(token)
  },[])
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [orderDetail, setOrderDetail] = useState({});
  const handleViewClick = (order) => {
    setOrderDetail(order)
    setIsViewOpen(true)
  }

  console.log("this is order",showOrder)
  const hdlAll = ()=>{
    setShowOrder(orders)
  }
  const hdlComplete = ()=>{
    setShowOrder(orders.filter((obj)=>obj.orderStatus === "COMPLETE"))
  }
  const hdlOnprocess = ()=>{
    setShowOrder(orders.filter((obj)=>obj.orderStatus === "ONPROCESS"))
  }
  const hdlCancle = ()=>{
    setShowOrder(orders.filter((obj)=>obj.orderStatus === "CANCLE"))
  }
 
  // console.log(orders[0].productImages[0].image)

  return (

    <div>
      <h2 className="text-red-500 text-2xl font-bold mb-4 ml-10">Order History</h2>
      <div className="flex space-x-2 mb-4 ml-10">
        <button className="bg-black text-white px-4 py-2 rounded hover:scale-105" onClick={hdlAll}>All</button>
        <button className="bg-white text-black px-4 py-2 rounded border hover:scale-105" onClick={hdlComplete}>Complete</button>
        <button className="bg-white text-black px-4 py-2 rounded border hover:scale-105" onClick={hdlOnprocess}>On-process</button>
        <button className="bg-white text-black px-4 py-2 rounded border hover:scale-105" onClick={hdlCancle}>Cancel</button>
      </div>
      <div className="grid grid-cols-6 gap-4 m-6">
        
        {showOrder.length !== 0
          ?showOrder.map((el) => (
          <button key={el.orderNumber} className="bg-white rounded-lg shadow-xl p-4 hover:scale-105" 
          onClick={() => handleViewClick(el)}>
            <img src={el?.productImages[0]?.image || defaultImg} alt={el.name} className="w-60 h-60 object-cover mb-2 rounded m-auto" />
            <h3 className="font-bold text-left">Order no. {el.orderNumber}</h3>
            <div className="flex justify-end items-center mt-2 ">
              <span className="font-bold">THB {el.sellingPrice.toFixed(2)}</span>
            </div>
          </button>
        ))
         :<p className='text-3xl font-bold'>There is no order</p>}


      </div>
      {isViewOpen &&
          <ViewOrderDetail 
          orderDetail = {orderDetail}
          closeViewModal={() => setIsViewOpen(false)}
        />}
    </div>


  )
}

export default OrderHistory