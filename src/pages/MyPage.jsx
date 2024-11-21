import React, { useEffect } from 'react';
import UserProfile from '../components/User/UserProfile';
import OrderHistory from '../components/User/OrderHistory';
import useUserStore from '../stores/user-store';

const MyPage = () => {

    const token = useUserStore(state => state.token)
    const getInfo = useUserStore(state => state.getInfo)
    const editInfo = useUserStore(state=>state.editInfo)
    const user = useUserStore(state => state.user)
    useEffect(() => {
      getInfo(token)
    },[token,getInfo,editInfo])
    
    if(!user){
        return <p>Page is loading....</p>
    }
    return (
        <div className='flex flex-col'>
        <div className='flex-1'>
            <UserProfile user={user} token={token} editInfo={editInfo} getInfo={getInfo} />
        </div>
        <div className='flex-1'>
            <OrderHistory token={token}/>
        </div>
        </div>
    )
}

export default MyPage
