import { AddOrderIcon, BuyerIcon ,CardDown,ListDown} from '../../pictures/icons/icon'
import { useEffect } from 'react'
import AddOrder from './AddOrder'
import AddBuyer from './AddBuyer'
import { Link } from 'react-router-dom'
import useUserStore from '../../stores/user-store'

const AdminSideBar = () => {
    const setView = useUserStore(state=>state.setView)
    return (
        <div className=' flex justify-between '>
            <div className='h-full w-[400px] bg-gray-200'>
                <div className='flex flex-col gap-2 m-2'>
                    <div className='mt-5 ml-5 flex gap-1 items-center justify-end'>
                        <div className='w-8 h-8'><CardDown /></div>
                        <input onChange={()=>setView()} type="checkbox" value="synthwave" className="toggle theme-controller " />
                        <div className='w-8 h-8'><ListDown /></div>
                    </div>
                    <Link to={"/admin"} className="btn btn-warning text-xl ">All Orders</Link>
                    <Link to={"onprocess"} className="btn btn-info text-xl">Onprocess Orders</Link>
                    <Link to={"complete"} className="btn btn-success text-xl">Complete Orders</Link>
                    <Link to={"cancle"} className="btn btn-error text-xl">Cancle Orders</Link>
                    <Link to={"customer"} className="btn btn-outline btn-accen text-xl">Customers</Link>
                    <Link to={"buyer"} className="btn btn-outline btn-primary text-xl">Buyers</Link>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn text-3xl bg-blue-300  h-[75px]" onClick={() => document.getElementById('add_order').showModal()}><AddOrderIcon className='w-8' />Add new order</button>
                    <button className="btn text-3xl bg-blue-300  h-[75px]" onClick={() => document.getElementById('add_buyer').showModal()}><BuyerIcon className='w-8' />Add new Buyer</button>
                    <AddOrder />
                    <AddBuyer />
                </div>
            </div>

        </div>

    )
}

export default AdminSideBar