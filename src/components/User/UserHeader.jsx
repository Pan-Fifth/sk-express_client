import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../pictures/SK-logo-only.png";
import useUserStore from "../../stores/user-store";

function UserHeader() {
  const logout = useUserStore((state) => state.logout);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md h-[60px] flex justify-between items-center relative">
      <div className='ml-6'>
        <Link to={'/'}><img src={logo} alt="SK EXPRESS Logo" className="h-6" /></Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden mr-6 text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-800 mr-6">
        <li className="hover:text-red-500 transition"><Link to={'/'}>Home</Link></li>
        <li className="hover:text-red-500 transition"><Link to={'/product'}>Product</Link></li>
        <li className="hover:text-red-500 transition"><Link to={'/contact'}>Contact</Link></li>
        <li className="hover:text-red-500 transition"><Link to={'/user/mypage'}>My page</Link></li>
        <li className="hover:text-red-500 transition cursor-pointer" onClick={hdlLogout}>Log out</li>
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-[60px] right-0 w-full bg-white shadow-md py-2 z-50">
          <li className="hover:bg-gray-100 px-6 py-2"><Link to={'/'}>Home</Link></li>
          <li className="hover:bg-gray-100 px-6 py-2"><Link to={'/product'}>Product</Link></li>
          <li className="hover:bg-gray-100 px-6 py-2"><Link to={'/contact'}>Contact</Link></li>
          <li className="hover:bg-gray-100 px-6 py-2"><Link to={'/user/mypage'}>My page</Link></li>
          <li className="hover:bg-gray-100 px-6 py-2 cursor-pointer" onClick={hdlLogout}>Log out</li>
        </ul>
      )}
    </header>
  )
}

export default UserHeader;
