import React, { useState, useRef } from 'react'
import useBuyerStore from '../../stores/buyer-store'
import useOrderStore from '../../stores/order-store'
import useUserStore from '../../stores/user-store'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'
import Swal from "sweetalert2"

const ViewOrderDetail = ({ orderDetail, closeViewModal, setUpdate, update }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [orderInput, setOrderInput] = useState({})
    const [file, setFile] = useState(null)
    const allUser = useUserStore(state => state.allUser)
    const buyer = useBuyerStore(state => state.buyer)
    const adminEditOrder = useOrderStore(state => state.adminEditOrder)
    const token = useUserStore(state => state.token)
    const orderIsLoading = useOrderStore(state => state.orderIsLoading)
    const adminGetOrder = useOrderStore(state => state.adminGetOrder)
    const adminDeleteOrder = useOrderStore(state => state.adminDeleteOrder)
    const fileInputRef = useRef(null);
    const userPayment = ["NOT_PAY", "DEPOSITE", "PAID"]
    const buyerPayment = ["NOT_PAY", "PAID"]
    const shippingStatus = ["PENDING", "JP_WH", "OUT_OF_JP", "ARRIVED_TH", "COMPLETE"]
    const orderStatus = ["ONPROCESS", "COMPLETE", "CANCLE"]

    console.log(file);
    const hdlInputOrder = (e) => {
        setOrderInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }
    const hdlFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }
    const hdlFileChange = (event) => {
        setFile(event.target.files[0])
    };
    const hdlClick = async (e) => {
        try {
            console.log("input", orderInput);
            console.log("File input", file);
            const body = new FormData
            body.append("id", orderDetail.id)
            body.append("buyerId", orderInput.buyerId)
            body.append("buyerPaymentStatus", orderInput.buyerPaymentStatus)
            body.append("cost", orderInput.cost)
            body.append("deposite", orderInput.deposite)
            body.append("depositeAt", orderInput.depositeAt)
            body.append("detail", orderInput.detail)
            body.append("name", orderInput.name)
            body.append("orderDate", orderInput.orderDate)
            body.append("orderStatus", orderInput.orderStatus)
            body.append("sellingPrice", orderInput.sellingPrice)
            body.append("shippingStatus", orderInput.shippingStatus)
            body.append("trackingNo", orderInput.trackingNo)
            body.append("userPaymentStatus", orderInput.userPaymentStatus)
            body.append("webLink", orderInput.webLink)
            body.append("userId", orderInput.userId)
            body.append("fee", orderInput.fee)
            body.append("rate", orderInput.rate)
            body.append("image", file)

            const result = await adminEditOrder(token, body)

            closeViewModal()
            adminGetOrder(token)
            setUpdate(!update)
        } catch (err) {
            console.log(err);
        }
    };
    const hdlDeleteOrder = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-error",  
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: `To permanently delete order no: ${orderDetail.orderNo}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                adminDeleteOrder(token, orderDetail.id)
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: `Order no: ${orderDetail.orderNo} has been deleted.`,
                    icon: "success"
                });
                closeViewModal()
                adminGetOrder(token)
                setUpdate(!update)
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: `Order no: ${orderDetail.orderNo} is safe now :)`,
                    icon: "error"
                });
                closeViewModal()
            }
        });
    }

    return (
        <dialog id="ViewOrderDetail_modal" className="modal" open>
            <div className="modal-box">
                {orderIsLoading
                    ? <Lottie animationData={Loading} loop={true} className='m-auto w-[600px] ' />
                    : !isEdit
                        ? <div className='flex  gap-1'>
                            <div className='flex-1 my-5 mx-5'>
                                <h3 className="font-bold text-2xl">Order No. <span className='font-normal'>{orderDetail.orderNo}</span></h3>
                                <div className="divider divider-primary w-[60%] m-auto my-8 text-lg  font-bold">Product Detail</div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className=" font-bold text-lg">Product Name: </p>
                                    <p className='font-normal'>{orderDetail.productName}</p>
                                    <p className=" font-bold text-lg">Product Detail: </p>
                                    <p className='font-normal'>{orderDetail.productDetail}</p>
                                    <p className="font-bold text-lg">Order Date: </p>
                                    <p className='font-normal'>{orderDetail.date}</p>
                                    <p className="font-bold text-lg">Link: </p>
                                    <a className='font-normal' href={orderDetail.webLink || '#'} target="_blank">Press-Link</a>
                                    <p className="font-bold text-lg">Cost: </p>
                                    <p className='font-normal'>{orderDetail.cost} THB</p>
                                    <p className="font-bold text-lg">Price:</p>
                                    <p className='font-normal'>{orderDetail.price} THB</p>
                                    <p className="font-bold text-lg">Shipping Status: </p>
                                    <p className='font-normal'>{orderDetail.shipStatus}</p>
                                    <p className="font-bold text-lg">Tracking no: </p>
                                    <p className='font-normal'>{orderDetail.tracking}</p>
                                </div>
                                <div className="divider divider-warning w-[60%] m-auto my-8 text-lg font-bold">Customer Detail</div>
                                <div className='grid grid-cols-4 gap-3'>
                                    <p className="font-bold text-lg">Customer Name: </p>
                                    <p className='font-normal'>{orderDetail.customer}</p>
                                    <p className="font-bold text-lg">Payment status:</p>
                                    <p className='font-normal'>{orderDetail.payStatus}</p>
                                    <p className="font-bold text-lg">Deposite:</p>
                                    <p className='font-normal'>{orderDetail.deposite}</p>
                                    <p className="font-bold text-lg">DepositeAt:</p>
                                    <p className='font-normal'>{orderDetail.depositeAt ? orderDetail.depositeAt : "not yet"}</p>
                                </div>
                                <div className="divider divider-info w-[60%] m-auto my-8 text-lg font-bold">Buyer Detail</div>
                                <div className='grid grid-cols-4 gap-3'>
                                    <p className="font-bold text-lg">Buyer Name: </p>
                                    <p className='font-normal'>{orderDetail.buyerName}</p>
                                    <p className="font-bold text-lg">Buyer rate:</p>
                                    <p className='font-normal'>{orderDetail?.rate || orderDetail?.buyerRate}</p>
                                    <p className="font-bold text-lg">Buyer fee:</p>
                                    <p className='font-normal'>{orderDetail?.fee || orderDetail?.buyerFee}</p>
                                    <p className="font-bold text-lg">Buyer Payment:</p>
                                    <p className='font-normal'>{orderDetail.buyerPaymentStatus}</p>
                                </div>
                                <div className="divider divider-success w-[60%] m-auto my-8 text-lg font-bold">Information</div>
                                <div className='grid grid-cols-4 gap-3'>
                                    <p className="font-bold text-lg">Last update: </p>
                                    <p className='font-normal'>{orderDetail.updatedAt}</p>
                                    <p className="font-bold text-lg">This Order Status: </p>
                                    <p className='font-normal'>{orderDetail.orderStatus}</p>
                                </div>


                            </div>
                            <div className='flex-1 my-auto w-[700px] h-[700px] bg-gray-200 rounded-xl '>
                                <img className='object-contain w-full h-full   ' src={orderDetail.productImg} />
                            </div>
                        </div>
                        : <div className='flex  gap-1'>
                            <div className='flex-1 my-5 mx-5'>
                                <h3 className="font-bold text-2xl">Order No. <span className='font-normal'>{orderDetail.orderNo}</span></h3>
                                <div className="divider divider-primary w-[60%] m-auto my-8 text-lg  font-bold">Product Detail</div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className=" font-bold text-lg">Product Name: </p>
                                    <input type='text' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.productName} name='name' onChange={hdlInputOrder} />
                                    <p className=" font-bold text-lg">Product Detail: </p>
                                    <input type='text' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.productDetail} name='detail' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Order Date: </p>
                                    <input type='date' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.date} name='orderDate' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Link: </p>
                                    <input type='text' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.webLink} name='webLink' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Cost: </p>
                                    <input type='float' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.cost} name='cost' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Price:</p>
                                    <input type='float' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.price} name='sellingPrice' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Shipping Status: </p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='shippingStatus' className="select select-accent w-full  ">
                                        <option disabled className=' text-slate-300'  >{orderDetail?.shipStatus}</option>
                                        {shippingStatus.map((el) => (<option key={el} value={el}>{el}</option>))}
                                    </select>
                                    <p className="font-bold text-lg">Tracking no: </p>
                                    <input type='text' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.tracking} name='trackingNo' onChange={hdlInputOrder} />
                                </div>
                                <div className="divider divider-warning w-[60%] m-auto my-8 text-lg font-bold">Customer Detail</div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className="font-bold text-lg">Customer Name: </p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='userId' className="select select-accent w-full ">
                                        <option disabled className=' text-slate-300' >{orderDetail?.customer}</option>
                                        {allUser.map((el) => (<option key={el.id} value={el.id}>{el.firstName}</option>))}
                                    </select>
                                    <p className="font-bold text-lg">Payment status:</p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='userPaymentStatus' className="select select-accent w-full ">
                                        <option disabled className=' text-slate-300'  >{orderDetail?.payStatus}</option>
                                        {userPayment.map((el) => (<option key={el} value={el}>{el}</option>))}
                                    </select>
                                    <p className="font-bold text-lg">Deposite:</p>
                                    <input type='float' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.deposite} name='deposite' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Deposite At:</p>
                                    <input type='date' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.depositeAt ? orderDetail?.depositeAt : "not yet"} name='depositeAt' onChange={hdlInputOrder} />

                                </div>
                                <div className="divider divider-info w-[60%] m-auto my-8 text-lg font-bold">Buyer Detail</div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className="font-bold text-lg">Buyer Name: </p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='buyerId' className="select select-accent w-full ">
                                        <option disabled className=' text-slate-300' >{orderDetail?.buyerName}</option>
                                        {buyer.map((el) => (<option key={el.id} value={el.id}>{el.name}</option>))}
                                    </select>
                                    <p className="font-bold text-lg">Buyer rate:</p>
                                    <input type='float' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.rate || orderDetail?.buyerRate} name='rate' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Buyer fee:</p>
                                    <input type='float' className=' bg-slate-200 rounded-lg pl-5' placeholder={orderDetail?.fee || orderDetail?.buyerFee} name='fee' onChange={hdlInputOrder} />
                                    <p className="font-bold text-lg">Buyer Payment:</p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='buyerPaymentStatus' className="select select-accent w-full ">
                                        <option disabled className=' text-slate-300' >{orderDetail?.buyerPaymentStatus}</option>
                                        {buyerPayment.map((el) => (<option key={el} value={el}>{el}</option>))}
                                    </select>
                                </div>
                                <div className="divider divider-success w-[60%] m-auto my-8 text-lg font-bold">Information</div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <p className="font-bold text-lg">Last update: </p>
                                    <p className='font-normal'>{orderDetail.updatedAt}</p>
                                    <p className="font-bold text-lg">This Order Status: </p>
                                    <select onChange={(e) => setOrderInput({ ...orderInput, [e.target.name]: e.target.value })} name='orderStatus' className="select select-accent w-full ">
                                        <option disabled className=' text-slate-300'  >{orderDetail?.shipStatus}</option>
                                        {orderStatus.map((el) => (<option key={el} value={el}>{el}</option>))}
                                    </select>
                                </div>


                            </div>
                            <div className='flex-1 my-auto w-[700px] h-[700px] bg-gray-200 rounded-xl overflow-hidden'>
                                <img className='object-contain w-full h-full  ' src={orderDetail.productImg} />
                            </div>
                        </div>

                }


                {!isEdit
                    ? <>
                        <div className='flex mx-auto justify-end gap-4'>
                            <p className='btn btn-outline btn-warning w-[150px]' onClick={() => { setIsEdit(!isEdit) }}>Edit</p>
                            <button className="btn btn-primary w-[150px]" onClick={closeViewModal} >Close</button>
                        </div>
                    </>
                    : <>
                        <div className='flex justify-between mx-10'>
                            <p className=' btn btn-warning' onClick={hdlDeleteOrder}>Delete this order</p>
                            <div className='flex gap-5'>
                                <p className='btn btn-error' onClick={() => { setIsEdit(!isEdit) }}>Cancle </p>
                                <p className='btn btn-info' onClick={hdlFile}>Change Order Pic</p>
                                <p className='btn btn-outline btn-accent' onClick={hdlClick} >Confirm</p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    name='file'
                                    className='hidden'
                                    onChange={hdlFileChange}
                                />
                                {file && <p> {file.name}</p>}
                            </div>
                        </div>

                    </>
                }
            </div>
        </dialog>
    )
}

export default ViewOrderDetail