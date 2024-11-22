import { create } from "zustand";
import axios from "axios";
import { createJSONStorage,persist } from "zustand/middleware";
const API_URL = import.meta.env.VITE_API_URL
const useBuyerStore = create(persist((set,get)=>({
    buyer:[],
    buyerIncInactive:[],
    getBuyer: async(token) =>{
        try {
            const res = await axios.get(`${API_URL}/buyer/allActive`,{
                headers:{Authorization:`Bearer ${token}`}
            })
            set({buyer:res.data})
        } catch (err) {
            console.log(err)
        }
    },
    addBuyer: async(token,body) =>{
        try {
            const res = await axios.post(`${API_URL}/buyer/add`,body,{
                headers:{Authorization:`Bearer ${token}`}
            })
            alert("create buyer complete")
        } catch (err) {
            console.log(err)
        }
     },
     editBuyer: async(token,body)=>{
        try {
            const res =await axios.patch(`${API_URL}/buyer/edit`,body,{
               headers:{Authorization:`Bearer ${token}`} 
            })
        } catch (err) {
            console.log(err);
        }
     },
     getBuyerIncInactive : async (token) =>{
        try {
            console.log("getBuyerIncInactive")
            const res = await axios.get(`${API_URL}/buyer/all`,{
                headers:{Authorization:`Bearer ${token}`}
            })
            set({buyerIncInactive:res.data})
        } catch (err) {
            console.log(err)
        }
     }
}),{
    name: "Buyer",
    storage: createJSONStorage(()=>localStorage)
}))

export default useBuyerStore;