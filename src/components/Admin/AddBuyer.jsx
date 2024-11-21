import React, { useState } from 'react'
import useBuyerStore from '../../stores/buyer-store'
import useUserStore from '../../stores/user-store'
const AddBuyer = () => {
    const [input, setInput] = useState({
        name: '',
        fee: '',
        rate: ''
    })
    const addBuyer = useBuyerStore(state=>state.addBuyer)
    const getBuyer = useBuyerStore(state=>state.getBuyer)
    const token = useUserStore(state=>state.token)
    const hdlInput = (e) => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }

    const hdlClick = async (e) => {
        console.log(input)
        await addBuyer(token,input)
        await getBuyer(token)
        await e.target.closest('dialog').close()
        hdlClear()
    }
    const hdlClear = ()=>{
         setInput({
            name: '',
            fee: '',
            rate: ''
        })
    }


    return (
        <div>
            <dialog id="add_buyer" className="modal">
                <div className="modal-box bg-blue-100 flex flex-col" id='buyer'>
                    <form method="dialog" >
                        {/* if there is a button in form, it will close the modal */}
                        <button onClick={hdlClear} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex flex-col gap-2 justify-center'>
                        <h3 className="font-bold text-3xl">Create Buyer</h3>
                        <div className='flex gap-2 items-center'><p className='w-1/3'>Name</p><input onChange={hdlInput} name='name' type='text' className='w-full h-[50px] rounded-xl px-2' value={input.name} /></div>
                        <div className='flex gap-2 items-center'><p className='w-1/3'>Rate</p><input onChange={hdlInput} name='rate' type='float' className='w-full h-[50px] rounded-xl px-2' value={input.rate} /></div>
                        <div className='flex gap-2 items-center'><p className='w-1/3'>Fee</p><input onChange={hdlInput} name='fee' type='float' className='w-full h-[50px] rounded-xl px-2' value={input.fee} /></div>
                        <button onClick={hdlClick} className="btn btn-accent text-xl">Create</button>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

export default AddBuyer