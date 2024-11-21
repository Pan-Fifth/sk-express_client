import React from 'react'
import address from "../pictures/address.jpg"
import line from "../pictures/line.jpg"

const Contact = () => {
  return (
    <div className='h-full bg-[#f33853] flex items-center' >
    <div className='max-w-[700px] m-auto  '>
      <img src={address} className='rounded-3xl' />
    </div>
    <div className='max-w-[700px] m-auto '>
      <img src={line} className='rounded-3xl' />
    </div>
    </div>
  )
}

export default Contact