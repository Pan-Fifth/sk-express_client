import React, {useState } from 'react'
import useOrderStore from '../../stores/order-store'
import useUserStore from '../../stores/user-store'
import OrderCard from '../../components/Admin/OrderCard'
import OrderRow from '../../components/Admin/OrderRow'
import { format } from 'date-fns'
import defaultImg from '../../pictures/defaultProdict.jpg'

const Cancle = () => {
  const [update,setUpdate] = useState(false)
  const view = useUserStore(state => state.view)
  const adminOrders = useOrderStore(state => state.adminOrders)
  const cancle =  adminOrders?.filter((obj)=>obj.orderStatus === "CANCLE")
  
  console.log("cancle",cancle);
  return (
    <div className=' overflow-auto w-full mt-3 mx-3'>

      {!view
        ? <div className='flex flex-wrap gap-2'>
          {cancle.length === 0 ?<p className='text-3xl font-bold mx-auto mt-3'>There is no cancle Order</p> 
          :cancle.map((el) => (
            <OrderCard
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
              webLink = {el.webLink === '-' ?null :el.webLink}
              productName={el.name}
              productDetail = {el.detail}
              productImg={el?.productImages[0]?.image || defaultImg}
              updatedAt={format(el.updateAt,"dd/MM/yyyy")}
              buyerRate ={el.buyer.rate}
              buyerFee ={el.buyer.fee} 
              buyerName = {el.buyer.name}
              cost = {el.cost}
              buyerPaymentStatus = {el.buyerPaymentStatus}
              setUpdate = {setUpdate}
              update = {update}
              />
          ))}
        </div>
        : <div className='flex flex-col gap-1'>
          {cancle.length === 0 ?<p className='text-3xl font-bold mx-auto mt-3'>There is no Order</p>
            :cancle.map((el) => (

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
              buyerName = {el.buyer.name}
              cost = {el.cost}
              buyerPaymentStatus = {el.buyerPaymentStatus}
              setUpdate = {setUpdate}
              update = {update}
              />
          ))}
        </div>
      }

    </div>
  )
}

export default Cancle