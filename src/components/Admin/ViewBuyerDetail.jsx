import { useState } from "react"
import useBuyerStore from "../../stores/buyer-store"
import useUserStore from "../../stores/user-store"
import BuyerOrder from "../../pages/Admin/BuyerOrder"

const ViewBuyerDetail = ({ buyerDetail, closeViewModal, setUpdate, update, }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState({})
    const editBuyer = useBuyerStore(state => state.editBuyer)
    const token = useUserStore(state => state.token)
    const getBuyer = useBuyerStore(state => state.getBuyer)
    const getBuyerIncInactive = useBuyerStore(state => state.getBuyerIncInactive)
    const hdlInput = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlEdit = () => {
        setIsEdit(!isEdit)
    }

    const hdlSubmit = async () => {
        const body = new FormData
        body.append("id", buyerDetail.id)
        body.append("name", input.name)
        body.append("rate", input.rate)
        body.append("fee", input.fee)
        body.append("isActive",input.isActive)
        console.log(body);
        await editBuyer(token, body)
        closeViewModal()
        getBuyer(token)
        getBuyerIncInactive(token)
        setUpdate(!update)
    }
    return (
        <div>
            {!isEdit
                ? <dialog id="customer_modal" className="modal" open>
                    <div className="modal-box bg-white" id='buyerModal'>
                            <div className='grid grid-cols-4 gap-4 '>
                                <h3 className="font-bold text-4xl">Name:</h3>
                                <p className="text-3xl">{buyerDetail.name}</p>
                                <h3 className="font-bold text-4xl">Rate:</h3>
                                <p className="text-3xl">{buyerDetail.rate} THB/JPY</p>
                                <h3 className="font-bold text-4xl">Fee:</h3>
                                <p className="text-3xl">{buyerDetail.fee} THB</p>
                                <h3 className="font-bold text-4xl">Active:</h3>
                                {buyerDetail.isActive ?<p className='text-3xl text-green-500'>Active</p> : <p className='text-3xl text-red-500'>Not Avtive</p>}
                            </div>
                            <BuyerOrder buyerId={buyerDetail.id}  />
                        <div className="modal-action">
                            <button className="btn btn-warning" onClick={() => hdlEdit()}>Edit</button>
                            <button className="btn btn-primary" onClick={closeViewModal}>Close</button>
                        </div>
                    </div>
                </dialog>
                : <dialog id="customer_modal" className="modal" open>
                    <div className="modal-box bg-white" id='buyerModal'>
                        <div className='flex '>
                            <div className='grid grid-cols-2 mx-auto'>
                                <h3 className="font-bold text-4xl ">Name:</h3>
                                <input type="text" placeholder={buyerDetail.name} className="input input-bordered w-full max-w-xs" name="name" onChange={hdlInput} />
                                <h3 className="font-bold text-4xl">Rate:</h3>
                                <input type="number" placeholder={buyerDetail.rate} className="input input-bordered w-full max-w-xs" name="rate" onChange={hdlInput} />
                                <h3 className="font-bold text-4xl">Fee:</h3>
                                <input type="number" placeholder={buyerDetail.fee} className="input input-bordered w-full max-w-xs" name="fee" onChange={hdlInput} />
                                <h3 className="font-bold text-4xl">Active:</h3>
                                <select className="select select-bordered w-full max-w-xs" name="isActive" onChange={hdlInput}>
                                    <option disabled selected>Check</option>
                                    <option value={true}>Active</option>
                                    <option value={false}>Not Active</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-action">
                            <div className="flex gap-3">
                                <button className="btn btn-primary" onClick={hdlSubmit} >OK</button>
                                <button className="btn btn-error" onClick={closeViewModal}>Cancle</button>
                            </div>
                        </div>
                    </div>
                </dialog>
            }

        </div>
    )
}

export default ViewBuyerDetail