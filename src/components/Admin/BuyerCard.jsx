import React,{useState} from 'react'
import { BuyerAvatar } from '../../pictures/icons/icon'
import ViewBuyerDetail from './ViewBuyerDetail';
const BuyerCard = ({name,fee,rate,id,isUpdate,update,isActive}) => {
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [buyerDetail, setBuyerDetail] = useState({});
    const handleViewClick = (name,fee,rate,id,isActive) => {
        setBuyerDetail({
          "name": name,
          "fee": fee,
          "rate": rate,
          "id":id,
          "isActive": isActive
        })
        setIsViewOpen(true)
      }
     return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <div className='w-[300px] mx-auto'>
            <BuyerAvatar/>
            </div>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{name}</h2>
                <p className=' text-3xl'>{rate} THB/JPY</p>
                {isActive ?<p className=' text-3xl text-green-500'>Active</p> : <p className=' text-3xl text-red-500'>Not Avtive</p>}
                <div className="card-actions justify-end">
                    <button 
                    className="btn btn-primary" onClick={() => handleViewClick(name,fee,rate,id,isActive)}>View</button>
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

export default BuyerCard