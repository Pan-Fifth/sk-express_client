import { create } from "zustand";
import axios from "axios";
import { createJSONStorage,persist } from "zustand/middleware";

const useBuyerStore = create(persist((set,get)=>({
    buyer:[],
    buyerIncInactive:[],
    getBuyer: async(token) =>{
        try {
            const res = await axios.get('http://localhost:3000/buyer/allActive',{
                headers:{Authorization:`Bearer ${token}`}
            })
            set({buyer:res.data})
        } catch (err) {
            console.log(err)
        }
    },
    addBuyer: async(token,body) =>{
        try {
            const res = await axios.post('http://localhost:3000/buyer/add',body,{
                headers:{Authorization:`Bearer ${token}`}
            })
            alert("create buyer complete")
        } catch (err) {
            console.log(err)
        }
     },
     editBuyer: async(token,body)=>{
        try {
            const res =await axios.patch("http://localhost:3000/buyer/edit",body,{
               headers:{Authorization:`Bearer ${token}`} 
            })
        } catch (err) {
            console.log(err);
        }
     },
     getBuyerIncInactive : async (token) =>{
        try {
            console.log("getBuyerIncInactive")
            const res = await axios.get('http://localhost:3000/buyer/all',{
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