import React, { useState ,useRef } from 'react';
import { Plus } from '../../pictures/icons/icon';
import profileImg from '../../pictures/profileImg.jpg'
import useUserStore from '../../stores/user-store';

const UserProfile = (props) => {

  const [isEdit,setIsEdit]=useState(false)
  const [body,setBody]=useState({})
  const [loading,setLoading]=useState(false)


  const {user,token,editInfo,getInfo} =props
  const defaultImg = profileImg
  const editProfilePic = useUserStore(state=>state.editProfilePic)

  const hdlEdit =(e)=>{
      setBody(prv=>({...prv,[e.target.name]:e.target.value}))
  }

  const hdlSubmit =async ()=>{
      try {
        console.log(isEdit)
        console.log(Object.keys(body).length)
        if(isEdit && Object.keys(body).length!==0){
        await editInfo(token,body)
        await getInfo(token)
        console.log("correct")
        }
      } catch (err) {
        console.log(err)
      }finally{
        setIsEdit(!isEdit)
      }
  }
  
    const fileInputRef = useRef(null);
    const handleFileChange = async (event) => {
      try {
        setLoading(true)
        const file = new FormData
        file.append('profileImage',event.target.files[0])
        await editProfilePic(token,file)
        await getInfo(token)
      } catch (err) {
        console.log(err)
      }finally{
        setLoading(false)
      }
       
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Programmatically click the hidden input
        }
    };


  return (
      <main className="p-4 space-y-6">
        {/* User Profile */}
        <div className="bg-gray-300 shadow-md rounded-lg p-6">
          <div className="flex">
            <div className="w-1/3 relative">
              <img src={user.profileImage ?? defaultImg} alt="Profile" className="h-[400px] w-[400px] rounded-full " />
              {loading
              ?<span className="loading loading-spinner text-error"></span>
              :<></>}
              <button onClick={handleButtonClick}  className="absolute bottom-10 right-40 bg-blue-500 w-10 h-10 rounded-full p-2 text-white">
                <div className='h-5 w-5 m-auto'>
                <Plus/>
                </div>
              </button>
            {/* Hidden file input */}
            <input
                type='file'
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }} // Hide the input
            />
            </div>
            <div className="w-2/3 flex">
              <div className="flex flex-col gap-4 flex-1">
                <div className='text-3xl'>
                  <h2 className="text-red-500 font-bold">First name</h2>
                  {!isEdit
                  ?<p>{user?.firstName}</p>
                  :<input placeholder={user?.firstName} name='firstName' onChange={hdlEdit}/>
                  }
                </div>
                <div className='text-3xl'>
                  <h2 className="text-red-500 font-bold">Last name</h2>
                  {!isEdit
                  ?<p>{user?.lastName}</p>
                  :<input placeholder={user?.lastName} name='lastName' onChange={hdlEdit}/>
                  }
                </div>
                <div className='text-3xl'>
                  <h2 className="text-red-500 font-bold">Email</h2>
                  {!isEdit
                  ?<p>{user?.email}</p>
                  :<input placeholder={user?.email} name='email' onChange={hdlEdit}/>
                  }
                </div>
              </div>
             
              <div className="flex flex-col gap-4 flex-1">
              <div className='text-3xl'>
                  <h2 className="text-red-500 font-bold">Address</h2>
                  {!isEdit
                  ?<p>{user?.address}</p>
                  :<input placeholder={user?.address} name='address' onChange={hdlEdit}/>
                  }
                </div>
                <div className='text-3xl'>
                  <h2 className="text-red-500 font-bold">Phone</h2>
                  {!isEdit
                  ?<p>{user?.phone}</p>
                  :<input placeholder={user?.phone} name='phone' onChange={hdlEdit} />
                  }
                </div>
              <div className="flex justify-between items-center">
                {!isEdit 
                ?<button className="bg-black w-[100px] text-white mt-10 px-4 py-2 rounded text-2xl" onClick={()=>setIsEdit(!isEdit)}>Edit</button>
                :<button className="bg-black w-[100px] text-white mt-10 px-4 py-2 rounded text-2xl" onClick={hdlSubmit}>Ok</button>
                }
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>

  )
};

export default UserProfile;