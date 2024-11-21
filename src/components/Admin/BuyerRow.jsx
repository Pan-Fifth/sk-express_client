import React,{useState} from 'react'
import {BuyerAvatar} from '../../pictures/icons/icon'
import ViewBuyerDetail from './ViewBuyerDetail';

const BuyerRow = ({name,fee,rate,id,isUpdate, update,isActive}) => {
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [buyerDetail, setBuyerDetail] = useState({});
  const handleViewClick = (name,fee,rate,id) => {
    setBuyerDetail({
      "name": name,
      "fee": fee,
      "rate": rate,
      "id": id,
      "isActive":isActive
    })
    setIsViewOpen(true)
  }

  
    return (
    <div className="h-50 shadow-xl border my-1 mx-5 border-black rounded-lg">
          <div className='m-5 flex gap-5 ' >
              <div className=' w-20'>
              <BuyerAvatar/>
              </div>
            <div className=' flex items-center justify-between gap-1 flex-1'>
            <p className='text-2xl flex-1'><span className='font-bold text-2xl'>Name:</span> <br/> {name}</p>
            <p className='flex-1 text-2xl'><span className='font-bold text-2xl'>Rate:</span> <br/> {rate}   THB/JPY</p>
            <p className='flex-1 text-2xl'><span className='font-bold text-2xl'>Fee:</span> <br/> {fee}   THB</p>
            <p className='flex-1 text-2xl'><span className='font-bold text-2xl'>Status:</span> <br/>{isActive ?<p className=' text-3xl text-green-500'>Active</p> : <p className=' text-3xl text-red-500'>Not Avtive</p>}</p>
            <button
            className="btn btn-primary flex-1" onClick={() => handleViewClick(name,fee,rate,id,isActive)} >View</button>
            </div>
          </div>
          {isViewOpen &&
          <ViewBuyerDetail
          buyerDetail={buyerDetail}
          closeViewModal={() => setIsViewOpen(false)}
          isUpdate = {isUpdate} 
          update = {update}
        />}
        </div>
  )
}

export default BuyerRow