import React, { useState } from 'react'
import ViewCustomerDetail from './ViewCustomerDetail';
import { Phone, HomeAddress } from '../../pictures/icons/icon'
const CustomerCard = ({ name, lastName, address, email, phone, profileImage }) => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [customerDetail, setCustomerDetail] = useState({});

  const handleViewClick = (name, lastName, address, email, phone, profileImage) => {
    setCustomerDetail({
      "name": name,
      "lastName": lastName,
      "address": address,
      "email": email,
      "phone": phone,
      "profileImage": profileImage
    })
    setIsViewOpen(true)
  }

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className='w-[300px] h-[300px] mx-auto flex justify-center rounded-lg'>
        <img
          className=''
          src={profileImage}
          alt="user" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className='flex gap-2'>
          <div className='w-5 h-5'>
            <HomeAddress />
          </div>
          <p className=' overflow-hidden'>{address}</p>
        </div>
        <div className='flex gap-2'>
          <div className='w-5 h-5'>
            <Phone />
          </div>
          <p className=' overflow-hidden'>{phone}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn  btn-primary " onClick={() => handleViewClick(name, lastName, address, email, phone, profileImage)}>View</button>
        </div>
      </div>

      {isViewOpen &&
        <ViewCustomerDetail
          customerDetail={customerDetail}
          closeViewModal={() => setIsViewOpen(false)}
        />}
    </div>
  )
}

export default CustomerCard