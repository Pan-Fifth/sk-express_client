import React, { useState } from 'react'
import PasteOrUploadImage from './PasteOrUploadImage'
import useUserStore from '../../stores/user-store'
import useOrderStore from '../../stores/order-store'
import useBuyerStore from '../../stores/buyer-store'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'


const AddOrder = () => {
    const allUser = useUserStore(state=>state.allUser)
    const buyer = useBuyerStore(state => state.buyer)
    const [imageSrc, setImageSrc] = useState(null);
    const adminGetOrder = useOrderStore(state=>state.adminGetOrder)
    const [input, setInput] = useState({
        orderDate: '',
        name: '',
        detail: '',
        webLink: '',
        sellingPrice: '',
        trackingNo: '',
        userId: '',
        buyerId: '',
        cost:''
    })
    const [file, setFile] = useState(null)
    const token = useUserStore(state => state.token)
    const addOrder = useOrderStore(state => state.addOrder)
    const orderIsLoading = useOrderStore(state=>state.orderIsLoading)
    const hdlInput = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }
    const hdlClick = async (e) => {
        console.log(input)
        console.log("this is upload file",file)
        const body = new FormData()
        body.append("orderDate", input.orderDate)
        body.append("name", input.name)
        body.append("detail", input.detail)
        body.append("webLink", input.webLink)
        body.append("sellingPrice", input.sellingPrice)
        body.append("trackingNo", input.trackingNo)
        body.append("userId", input.userId)
        body.append("buyerId", input.buyerId)
        body.append("cost",input.cost)
        body.append("image", file)
        e.target.closest('dialog').close()
        await addOrder(token, body)
        await adminGetOrder(token)
        hdlClear()
        

    }
    const hdlClear = () => {
        setInput({
            orderDate: '',
            name: '',
            detail: '',
            webLink: '',
            sellingPrice: '',
            trackingNo: '',
            userId: '',
            buyerId: '',
            cost:'',
        })
        setImageSrc(null)
        setFile(null)
    }
    console.log(buyer);
    return (
        <div> <dialog id="add_order" className="modal">
            { orderIsLoading
            ?<Lottie animationData={Loading} loop={true} className='m-auto w-[600px] '/>
            :<div className="modal-box bg-blue-100 flex flex-col" id='order'>
                <form method="dialog" >
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={hdlClear} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col gap-2 justify-center'>
                    <h3 className="font-bold text-3xl">Add order</h3>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Order Date</p><input onChange={hdlInput} name='orderDate' type='date' className='w-full h-[50px] rounded-xl px-2' value={input.orderDate} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Product name</p><input onChange={hdlInput} name='name' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.name} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Detail</p><input onChange={hdlInput} name='detail' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.detail} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Web-Link</p><input onChange={hdlInput} name='webLink' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.webLink} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Cost</p><input onChange={hdlInput} name='cost' type='float' className='w-full h-[50px] rounded-xl px-2' value={input.cost} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Selling Price</p><input onChange={hdlInput} name='sellingPrice' type='float' className='w-full h-[50px] rounded-xl px-2' value={input.sellingPrice} /></div>
                    <div className='flex gap-2 items-center'><p className='w-1/3'>Tracking No.</p><input onChange={hdlInput} name='trackingNo' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.trackingNo} /></div>

                    <div className='flex gap-2 items-center'>
                        <p className='w-1/3'>Customer</p>
                        <select onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})}  name='userId' defaultValue={"Customer"} className="select select-accent w-full ">
                            <option disabled >Customer</option>
                            {allUser.map((el)=>(<option  key={el.id} value={el.id}>{el.firstName}</option>))}
                        </select>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='w-1/3'>Buyer</p>
                        <select onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})} name='buyerId' defaultValue={"Buyer"} className="select select-accent w-full ">
                            <option disabled >Buyer</option>
                            {buyer.map((el)=>(<option  key={el.id} value={el.id}>{el.name}</option>))}
                        </select>
                    </div>
                    {/* <div className='flex gap-2 items-center'><p className='w-1/3'>Buyer id</p><input onChange={hdlInput} name='buyerId' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.buyerId} /></div> */}

                    <PasteOrUploadImage file={file} setFile={setFile} imageSrc={imageSrc} setImageSrc={setImageSrc} />
                </div>
                <button onClick={hdlClick} className="btn btn-accent text-xl mt-2">Create</button>
            </div>
            }
        </dialog>

        </div>
    )
}

export default AddOrder