import React,{useState} from 'react'
import ViewOrderDetail from './ViewOrderDetail'
const OrderCard = ({setUpdate,update,date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate}) => {
    const [isViewOpen, setIsViewOpen] = useState(false);  
    const [orderDetail, setOrderDetail] = useState({});
    
     const handleViewClick = (date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate ) => {
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
              "cost":cost,
              "buyerPaymentStatus":buyerPaymentStatus,
              "fee":fee,
              "rate":rate
        });
        setIsViewOpen(true);
      };
      console.log(orderDetail);
     return (
        <div className="card card-compact bg-base-100 w-96 shadow-2xl">
            <figure className='w-[300px] h-[300px] mx-auto flex justify-center'>
                <img
                    className=''
                    src={productImg || defaultImg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{`Order No. ${orderNo}`}</h2>
                <p className=' overflow-hidden'>{productName}</p>
                <div className="card-actions justify-end">
                    <button 
                    onClick={()=>handleViewClick(date,deposite,depositeAt,customer,price,payStatus,shipStatus,orderNo,orderStatus,tracking,webLink,productName,productDetail,productImg,updatedAt,buyerRate,buyerFee,buyerName,cost,buyerPaymentStatus,id,fee,rate)}
                    className="btn btn-primary">View</button>
                </div>
            </div>

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

export default OrderCard