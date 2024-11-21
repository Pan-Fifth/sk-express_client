import React from 'react'

const ViewCustomerDetail = ({customerDetail,closeViewModal}) => {
    console.log(customerDetail);
    return (
        <div>
            <dialog id="customer_modal" className="modal" open>
                <div className="modal-box" id='customerModal'>
                <div className='flex '>

                <div className=' grid-cols-2 flex-1'>
                    <h3 className="font-bold text-4xl">Name:</h3>
                    <p className="py-4 text-3xl">{customerDetail.name}</p>
                    <h3 className="font-bold text-4xl">Last Name:</h3>
                    <p className="py-4 text-3xl">{customerDetail.lastName}</p>
                    <h3 className="font-bold text-4xl">Email:</h3>
                    <p className="py-4 text-3xl">{customerDetail.email}</p>
                    <h3 className="font-bold text-4xl">Address:</h3>
                    <p className="py-4 text-3xl">{customerDetail.address}</p>
                    <h3 className="font-bold text-4xl">Phone</h3>
                    <p className="py-4 text-3xl">{customerDetail.phone}</p>
                </div>
                <div className='flex-1'>
                    <img src={customerDetail.profileImage} className='rounded-3xl'/>
                </div>
                    
                </div>
                    
                    <div className="modal-action">   
                    <button className="btn" onClick={closeViewModal}>Close</button>   
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewCustomerDetail