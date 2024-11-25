import React from 'react'
import { FaSquareFacebook, FaInstagram ,FaLine} from "react-icons/fa6";

const Footer = () => {
  return (
          <div className="px-10 bg-gray-800 text-white h-[100px]">
            <div className="flex flex-col md:flex-row justify-between items-center">
              
              <div className="mt-5 md:mt-2">
                <h3 className="hidden md:block text-xl font-bold ">SK EXPRESS</h3>
                <p className="hidden md:block" >Your Bridge to Japanese Products</p>
              </div>

              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/MuhKQkDNebZiVTWe/?mibextid=JRoKGi"><FaSquareFacebook className="hover:text-gray-300 text-3xl"/></a>
                <a href="https://www.instagram.com/sk_express888?utm_source=qr"><FaInstagram className="hover:text-gray-300 text-3xl"/></a>
                <a href="https://lin.ee/W7YQ0yRx"><FaLine className="hover:text-gray-300 text-3xl"/></a>
              </div>

            </div>

            <div className=" text-center text-sm">
              &copy; 2022 SK EXPRESS
            </div>
          </div>
  )
}

export default Footer