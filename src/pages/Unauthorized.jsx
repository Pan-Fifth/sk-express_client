import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='h-full flex justify-center items-center'>
    <Link to ={'/'}><p className='text-6xl bg-red-600 text-white font-bold m-8 p-10'>Unauthorized</p></Link>
    </div>
  )
}

export default Unauthorized