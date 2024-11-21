import React, { useState } from 'react'
import { format, set } from 'date-fns'
import ShowShipping from './ShowShipping'

const ViewOrderDetail = ({ orderDetail, closeViewModal }) => {
    console.log(orderDetail)
    const [showImg, setShowImg] = useState(false)
    const [showShipping, setShowShipping] = useState(false)

    const hdlShowImg = () => {
        setShowImg(!showImg)
    }
    const hdlShowShipping = () => {
        setShowShipping(!showShipping)
    }
    console.log(orderDetail.shippingStatus)
    return (
        <div>
            <dialog id="customer_modal" className="modal" open>
                <div className="modal-box " id='CustomerOrderModal'>
                    <div className='flex flex-col w-[80%] gap-4 justify-around mx-auto'>
                        <h3 className="font-bold text-2xl">Order No. <span className='font-normal'>{orderDetail.orderNumber}</span></h3>

                        <div className="divider divider-primary w-[70%] m-auto my-4 text-lg font-bold">Product Detail</div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className="font-bold text-lg">Product Name:</p>
                                <p className='font-normal'>{orderDetail.name}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Product Detail:</p>
                                <p className='font-normal'>{orderDetail.detail}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Order Date:</p>
                                <p className='font-normal'>{format(orderDetail.orderDate, "dd/MM/yyyy")}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Link:</p>
                                <a className='font-normal' href={orderDetail.webLink || '#'} target="_blank" rel="noopener noreferrer">Press-Link</a>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Price:</p>
                                <p className='font-normal'>{orderDetail.sellingPrice} THB</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Tracking No:</p>
                                <p className='font-normal'>{orderDetail.trackingNo}</p>
                            </div>
                        </div>

                        <div className="divider divider-warning w-[70%] m-auto my-4 text-lg font-bold">Payment Detail</div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className="font-bold text-lg">Payment Status:</p>
                                <p className='font-normal'>{orderDetail.userPaymentStatus}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Deposit:</p>
                                <p className='font-normal'>{orderDetail.deposite}</p>
                            </div>
                            <div>
                                <p className="font-bold text-lg">Deposit At:</p>
                                <p className='font-normal'>{orderDetail.depositeAt ? format(orderDetail.depositeAt, "dd/MM/yyyy") : "not yet"}</p>
                            </div>
                        </div>

                        <div className="divider divider-success w-[70%] m-auto my-4 text-lg font-bold">Information</div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <p className="font-bold text-lg">Order status:</p>
                                <p className='font-normal'>{orderDetail.orderStatus}</p>
                            </div>
                        </div>

                        <div className=' flex gap-3 justify-end '>
                            <button className="btn btn-outline" onClick={hdlShowShipping}>{!showShipping ?"Shipping Status" :"Close Status"}</button>
                            <button className="btn btn-outline btn-primary" onClick={hdlShowImg}>{!showImg?"Production Image" :"Close Image"}</button>
                            <button className="btn btn-active" onClick={closeViewModal}>Close</button>
                        </div>

                        {showImg
                            ? <div className='mx-auto w-[700px] h-[700px] bg-gray-200 rounded-xl overflow-hidden'>
                                <img className='object-contain w-full h-full' src={orderDetail.productImages[0].image} alt="Product" />
                            </div>
                            : <></>}
                        {showShipping
                        
                            ?<div className='mx-auto'>
                            <ShowShipping currentStatus={orderDetail.shippingStatus}/>
                            </div> 
                            : <></>}

                    </div>

                </div>
            </dialog>
        </div>
    )
}

export default ViewOrderDetail