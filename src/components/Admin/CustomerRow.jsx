import React,{useState} from 'react'
import ViewCustomerDetail from './ViewCustomerDetail';

const CustomerRow = ({name,lastName,address,email,phone,profileImage}) => {
    const [isViewOpen, setIsViewOpen] = useState(false);
    const [customerDetail, setCustomerDetail] = useState({});  

  const handleViewClick = (name,lastName,address,email,phone,profileImage) =>{
    setCustomerDetail({
      "name":name,
      "lastName":lastName,
      "address": address,
      "email":email,
      "phone":phone,
      "profileImage":profileImage
    })
    setIsViewOpen(true)
  }

    return (
    <div className="h-50 shadow-xl border my-1 mx-5 border-black rounded-lg">
          <div className='m-5 flex gap-2 ' >
            <div className ="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={profileImage}
                alt="Circle Image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className=' flex items-baseline justify-between flex-1 gap-1'>
            <p className='text-xl flex-1'><span className='font-bold'>Name:</span> <br/> {name}</p>
            <p className='flex-1'><span className='font-bold'>Last name:</span> <br/> {lastName}  </p>
            <p className='flex-1 overflow-hidden'><span className='font-bold'>email:</span> <br/> {email}</p>
            <p className='flex-1'><span className='font-bold'>Address:</span> <br/> {address}</p>
            <p className='flex-1'><span className='font-bold'>Phone:</span><br/> {phone}</p>
            <button className="btn  btn-primary flex-1" onClick={()=>handleViewClick(name,lastName,address,email,phone,profileImage)}>View</button>

            </div>
          </div>
            {isViewOpen &&
              <ViewCustomerDetail 
              customerDetail = {customerDetail}
              closeViewModal = {()=>setIsViewOpen(false)}
              />}
        </div>
  )
}

export default CustomerRow