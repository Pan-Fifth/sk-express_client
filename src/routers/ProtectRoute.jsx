import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/user-store';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL
const ProtectRoute = ({element,allow}) => {
    const [isAllowed,setIsAllowed] = useState(null);
    const token = useUserStore(state=>state.token)
   

    useEffect(()=>{
        checkRole()
    },[])

    const checkRole = async()=>{
        try {
            const resp = await axios.get(`${API_URL}/user/info`,{
                headers : {Authorization:`Bearer ${token}`}
            })
            console.log("protect route", resp.data.user.role);
            const role =  resp.data.user.role;
            if(allow.includes(role)){
                setIsAllowed(true)
            }else{
                setIsAllowed(false)
            }

        } catch (err) {
         setIsAllowed(false)
         console.log(err);   
        }
    }
    if(isAllowed === null){
        return <div>is Loading</div>
    }
    if(!isAllowed){
        return <Navigate to ={'/unauthorized'}/>
    }
  return element;
}

export default ProtectRoute