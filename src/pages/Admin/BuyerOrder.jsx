import React, { useState } from 'react'
import useOrderStore from '../../stores/order-store'
import useUserStore from '../../stores/user-store'
import OrderRow from '../../components/Admin/OrderRow'
import { format, set } from 'date-fns'
import defaultImg from '../../pictures/defaultProdict.jpg'


const AllOrderBuyer = ({buyerId}) => {
  const view = useUserStore(state => state.view)
  const adminOrders = useOrderStore(state => state.adminOrders)
  const [update,setUpdate] = useState(false)
  const buyerOrder = adminOrders.filter((obj)=>obj.buyer.id == buyerId)
  console.log("this is buyer order",buyerId);
  return (
    <div className=' overflow-auto w-full mt-3 mx-3 bg-white'>
    <div className='flex flex-col gap-1'>
          {buyerOrder.length === 0 ?<p className='text-3xl font-bold mx-auto mt-3'>There is no Order</p>
            :buyerOrder.map((el) => (

            <OrderRow
              key={el.id}
              id={el.id}
              date={format(el.orderDate,"dd/MM/yyyy")}
              deposite = {el?.deposite || 0}
              depositeAt = {format(el.depositeAt,"dd/MM/yyyy")}
              customer={el.user.firstName}
              price={el.sellingPrice}
              payStatus={el.userPaymentStatus}
              shipStatus={el.shippingStatus}
              orderNo={el.orderNumber}
              orderStatus={el.orderStatus}
              tracking = {el.trackingNo}
              webLink = {el.webLink}
              productName={el.name}
              productDetail = {el.detail}
              productImg={el?.productImages[0]?.image || defaultImg}
              updatedAt={format(el.updateAt,"dd/MM/yyyy")}
              buyerRate ={el.buyer.rate}
              buyerFee ={el.buyer.fee}
              fee = {el.fee}
              rate = {el.rate} 
              buyerName = {el.buyer.name}
              cost = {el.cost}
              buyerPaymentStatus = {el.buyerPaymentStatus}
              setUpdate = {setUpdate}
              update = {update}
              />
          ))}
        </div>
    </div>
  )
}

export default AllOrderBuyer