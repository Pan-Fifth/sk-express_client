import React from 'react'
import address from "../pictures/address.jpg"
import line from "../pictures/line.jpg"

const Contact = () => {
  return (
    <div className='h-full bg-[#f33853] flex flex-col gap-2  md:flex-row items-center p-2' >
    <div className='max-w-[300px] md:max-w-[700px] m-auto  '>
      <img src={address} className='rounded-3xl' />
    </div>
    <div className='max-w-[300px] md:max-w-[700px] m-auto '>
      <img src={line} className='rounded-3xl' />
    </div>
    </div>
  )
}

export default Contact