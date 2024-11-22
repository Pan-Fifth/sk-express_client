import { create } from "zustand";
import axios from "axios";
import { createJSONStorage,persist } from "zustand/middleware";

const useUserStore = create(persist((set,get)=>({
    user:null,
    token:"",
    userIsLoading: false,
    allUser:[],
    view: false,
    setView:()=>{
        set((state) => ({ view: !state.view }))
    },
    login : async(input)=>{
        try {
            const res = await axios.post("http://localhost:3000/auth/login/",input)
            set({token:res.data.token})
            return res.data.user.role
        } catch (err) {
            alert(err.response.data.message)
            console.log(err)
        }
    },
    logout : ()=>{
        set({token:"", user: null})
        localStorage.removeItem("User")
        localStorage.removeItem("Orders")
        localStorage.removeItem("Buyer")
        
    },
    getInfo : async(token)=>{
        try {
            const res = await axios.get("http://localhost:3000/user/info",{
                headers : {Authorization:`Bearer ${token}`}
            })
            set({user:res.data.user})
        } catch (err) {
            console.log(err)
        }
    },
    editInfo: async(token,body)=>{
        try {
            const res = await axios.patch("http://localhost:3000/user/edit",body,{
                headers :{Authorization:`Bearer ${token}`}
            })
            set({user:res.data.user})
            
        } catch (err) {
            console.log(err)
        }
        
    },
    editProfilePic: async(token,file)=>{
        try {
            set({userIsLoading:true})
            const res = await axios.put("http://localhost:3000/user/edit",file,{
            headers :{Authorization:`Bearer ${token}`}
            })
            set({user:res.data.user,userIsLoading:false})
        } catch (err) {
            console.log(err)
        }
    },
    forgetPassword: async(body)=>{
        try {
            const res = await axios.post("http://localhost:3000/auth/forget-password",body)
            alert(res.data.message)
        } catch (err) {
            console.log(err)
        }
    },
    resetPassword: async(body)=>{
        try {
            const res = await axios.patch("http://localhost:3000/auth/resetPass",body)
            
        } catch (err) {
            console.log(err)
        }
    },
    getAllUser: async(token)=>{
        try {
            // console.log("in All user");
            const res = await axios.get("http://localhost:3000/user/all",{
                headers :{Authorization:`Bearer ${token}`}
                })

            set({allUser:res.data})
        } catch (err) {
            console.log(err)
        }
    }

}),{
    name: "User",
    storage: createJSONStorage(()=>localStorage)
}))

export default useUserStore;