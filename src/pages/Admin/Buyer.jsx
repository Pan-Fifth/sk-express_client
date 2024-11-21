import React, { useEffect, useState } from 'react'
import useBuyerStore from '../../stores/buyer-store'
import useUserStore from '../../stores/user-store'
import BuyerCard from '../../components/Admin/BuyerCard'
import BuyerRow from '../../components/Admin/BuyerRow'
const Buyer = () => {
  useEffect(()=>{
    getBuyerIncInactive(token)
  },[])
  const token = useUserStore(stste=>stste.token)
  const getBuyerIncInactive = useBuyerStore(state=>state.getBuyerIncInactive)
  const buyerIncInactive = useBuyerStore(state=>state.buyerIncInactive)
  const view = useUserStore(state => state.view)
  const [update,isUpdate] = useState(false)
  console.log(buyerIncInactive)
  return (
    <div className='overflow-auto w-full mt-3 mx-3'>
    {buyerIncInactive.length === 0 ?<p className='text-3xl font-bold mx-auto mt-3'>There is no Buyer right now</p>
    :<>{!view
    ?<div className='flex flex-wrap gap-2'>
    {buyerIncInactive.map((el)=><BuyerCard key={el.id}  name ={el.name} rate ={el.rate} fee = {el.fee} id={el.id} isActive = {el.isActive} isUpdate = {isUpdate} update = {update}/>)}
    </div>
    :<div className='flex flex-col gap-1'>
    {buyerIncInactive.map((el)=><BuyerRow key={el.id} name ={el.name} rate ={el.rate} fee = {el.fee} id={el.id} isActive = {el.isActive} isUpdate = {isUpdate} update = {update}/>)}
    </div>
    }</>
   
    }
    
    </div>
  )
}

export default Buyer