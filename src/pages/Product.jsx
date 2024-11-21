import React from 'react'
import {fashion,sports,secondHand,home} from '../resource/shop'

const Product = () => {
  return (
    <>
    <section className="py-16 bg-red-600">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">Fashion</h2>
        <div className='rounded-3xl bg-white'>
          <div className='flex flex-wrap gap-4 justify-center py-20'>
            {fashion.map((el, index) => (
              <div key={index} className="flex justify-center">
                <a href={el.link}>
                  <img
                    className='transition-transform transform hover:scale-110 rounded-2xl w-64 h-64 object-cover'
                    src={el.pic}
                    alt={el.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-red-500">Sports and Outdoors</h2>
        <div className='rounded-3xl bg-white'>
          <div className='flex flex-wrap gap-4 justify-center py-20'>
            {sports.map((el, index) => (
              <div key={index} className="flex justify-center">
                <a href={el.link}>
                  <img
                    className='transition-transform transform hover:scale-110 rounded-2xl w-64 h-64 object-cover'
                    src={el.pic}
                    alt={el.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
    <section className="py-16 bg-red-600">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">Second Hands</h2>
        <div className='rounded-3xl bg-white'>
          <div className='flex flex-wrap gap-4 justify-center py-20'>
            {secondHand.map((el, index) => (
              <div key={index} className="flex justify-center">
                <a href={el.link}>
                  <img
                    className='transition-transform transform hover:scale-110 rounded-2xl w-64 h-64 object-cover'
                    src={el.pic}
                    alt={el.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-red-500">Home Appliances</h2>
        <div className='rounded-3xl bg-white'>
          <div className='flex flex-wrap gap-4 justify-center py-20'>
            {home.map((el, index) => (
              <div key={index} className="flex justify-center">
                <a href={el.link}>
                  <img
                    className='transition-transform transform hover:scale-110 rounded-2xl w-64 h-64 object-cover'
                    src={el.pic}
                    alt={el.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Product