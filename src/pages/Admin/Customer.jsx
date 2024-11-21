import React from 'react'
import useUserStore from '../../stores/user-store'
import CustomerCard from '../../components/Admin/CustomerCard'
import CustomerRow from '../../components/Admin/CustomerRow'
import profileImg from '../../pictures/profileImg.jpg'

const Customer = () => {
  const allUser = useUserStore(state => state.allUser)
  const view = useUserStore(state => state.view)
  console.log("customer page", allUser);
  return (
    
  <div className='overflow-auto w-full mt-3 mx-3'>
    {!view
      ?<div className='flex flex-wrap gap-2'>
        {allUser.map((el) => <CustomerCard 
        name = {el?.firstName} 
        lastName = {el?.lastName}
        address ={el?.address}
        email = {el?.email}
        phone = {el?.phone}
        profileImage = {el?.profileImage || profileImg} 
        />)}
      </div>
      :<div className='flex flex-col gap-1'>
        {allUser.map((el)=><CustomerRow 
        name = {el?.firstName} 
        lastName = {el?.lastName}
        address ={el?.address}
        email = {el?.email}
        phone = {el?.phone}
        profileImage = {el?.profileImage || profileImg} 
        />)}
      </div>
    }
    </div>
    
  )
}

export default Customer