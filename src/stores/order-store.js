import { create } from "zustand"
import axios from "axios"
import { createJSONStorage, persist } from "zustand/middleware"

const useOrderStore = create(persist((set, get) => ({
    orders: [],
    adminOrders: [],
    orderIsLoading: false,

    //user get all orders
    getAllOrder: async (token) => {
        try {
            console.log("test get all order");
            const res = await axios.get('http://localhost:3000/order/all', {
                headers: { Authorization: `Bearer ${token}` }
            })
            set({ orders: res.data })
        } catch (err) {
            console.log(err)
        }
    },
    addOrder: async (token, body) => {
        try {
            set({orderIsLoading:true})
            console.log("add order store")
            const res = await axios.post('http://localhost:3000/order/add', body, {
                headers: { Authorization: `Bearer ${token}` }
            })
        } catch (err) {
            console.log(err)
        }finally{
            set({orderIsLoading:false})
        }
    },
    adminGetOrder: async (token) => {
        try {
            console.log("in admingetorder");
            const res = await axios.get('http://localhost:3000/admin/adminGetAllOrders', {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(res);
            set({ adminOrders: res.data })
        } catch (err) {
            console.log(err);
        }
    },
    adminEditOrder: async (token, body) => {
        try {
            set({orderIsLoading:true})
            console.log("in admin edit order")
            const res = await axios.patch("http://localhost:3000/admin/editOrder", body, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(res);
        } catch (err) {
            console.log(err);
        }finally{
            set({orderIsLoading:false})
        }
    },
    adminDeleteOrder: async(token,id) =>{
        try {
            set({orderIsLoading:true})
            const res = await axios.delete(`http://localhost:3000/order/delete/${id}`,{
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(res);
        } catch (err) {
            console.log(err);
        }finally{
            set({orderIsLoading:false})
        }
    }
  
}), {
    name: "Orders",
    storage: createJSONStorage(() => localStorage)
}))

export default useOrderStore;