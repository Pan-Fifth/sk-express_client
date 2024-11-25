import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPic from "../pictures/register.jpg";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
  const navigate = useNavigate();
  console.log("test");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlRegister = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/register/`, input);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="h-full bg-red-500 flex flex-col">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center ">
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex max-w-4xl w-full h-[85%]">
          {/* Registration form */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-4xl font-bold mb-6">Register</h2>
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Firstname"
                name="firstName"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="text"
                placeholder="Lastname"
                name="lastName"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="text"
                placeholder="email"
                name="email"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="tel"
                placeholder="Telephone no"
                name="phone"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="w-full p-2 border rounded"
                onChange={hdlChange}
              />
            </form>
            <div className="my-6">
              <button
                className="btn btn-warning w-full mb-1"
                onClick={hdlRegister}
              >
                REGISTER
              </button>
              <p className="mb-2 text-center text-sm">
                Already registered?{" "}
                <Link to={"/login"} className="text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
          {/* Image placeholder */}
          <img
            src={loginPic}
            className="hidden md:flex w-1/2 bg-gray-200 items-center justify-center"
            alt="Register"
          />
        </div>
      </main>
    </div>
  );
};

export default Signup;
