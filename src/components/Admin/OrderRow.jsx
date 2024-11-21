import React,{useState} from 'react'
import ShowPic from './ShowPic'
import ViewOrderDetail from './ViewOrderDetail';

const OrderRow = ({setUpdate,update,date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [selectedImage, setSelectedImage] = useState("");
    const [selectedOrderNo, setSelectedOrderNo] = useState("");
    const [isViewOpen, setIsViewOpen] = useState(false);  
    const [orderDetail, setOrderDetail] = useState({});

    
    const handleImageClick = (img, orderNo) => {
        setSelectedImage(img);
        setSelectedOrderNo(orderNo);
        setIsModalOpen(true);
      };

      const handleViewClick = (date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate) => {
        setOrderDetail({
              "id":id,
              "date":date,
              "deposite":deposite,
              "depositeAt":depositeAt,
              "customer":customer,
              "price":price,
              "payStatus":payStatus,
              "shipStatus":shipStatus,
              "orderNo":orderNo,
              "orderStatus":orderStatus,
              "tracking":tracking,
              "webLink":webLink,
              "productName":productName,
              "productDetail":productDetail,
              "productImg":productImg,
              "updatedAt":updatedAt,
              "buyerRate":buyerRate,
              "buyerFee" :buyerFee,
              "buyerName" :buyerName,
              "cost": cost,
              "buyerPaymentStatus":buyerPaymentStatus,
              "fee":fee,
              "rate":rate
        });
        setIsViewOpen(true);
      };

    return (
    <div className="h-50 shadow-xl border my-1 mx-5 border-black rounded-lg">
          <div className='m-5 flex gap-2 ' >
            <div className ="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
              <img
                onClick={() => handleImageClick(productImg, orderNo)}
                src={productImg || defaultImg}
                alt="Circle Image"
                className="object-contain w-full h-full"
              />
            </div>
            <div className=' flex items-baseline justify-between flex-1 gap-1'>
            <p className='text-xl flex-1'><span className='font-bold'>order no:</span> <br/> {orderNo}</p>
            <p className='flex-1'><span className='font-bold'>Date:</span> <br/> {date}  </p>
            <p className='flex-1 overflow-hidden'><span className='font-bold'>Product:</span> <br/> {productName}</p>
            <p className='flex-1'><span className='font-bold'>Customer:</span> <br/> {customer}</p>
            <p className='flex-1'><span className='font-bold'>Price:</span><br/> {price} THB</p>
            <p className='flex-1'><span className='font-bold'>Payment Status:</span><br/> {payStatus}</p>
            <p className='flex-1'><span className='font-bold'>Shipping Status:</span><br/> 
            {shipStatus==="PENDING" ? <p className=' text-red-600'>{shipStatus}</p>
            :shipStatus ==="JP_WH" || shipStatus ==="OUT_OF_JP" ?<p className='text-black'>{shipStatus}</p> 
            :shipStatus === 'ARRIVED_TH'?<p className=' text-yellow-500'>{shipStatus}</p>
            :<p className=' text-green-600'>{shipStatus}</p>}</p>
            <button
            onClick={()=>handleViewClick(date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate)}  
            className="btn btn-primary flex-1">View</button>

            </div>
          </div>

          {isModalOpen && 
            <ShowPic 
            image = {selectedImage} 
            orderno = {selectedOrderNo} 
            closeModal ={()=>setIsModalOpen(false)}    
            />}

          {isViewOpen &&
            <ViewOrderDetail
              orderDetail = {orderDetail}
              closeViewModal = {()=>setIsViewOpen(false)}
              setUpdate = {setUpdate}
              update = {update}
              
            />
          }




        </div>
  )
}

export default OrderRow