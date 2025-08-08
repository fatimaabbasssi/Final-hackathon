import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { setToken, setUser } from "../utils/auth";
const SignUp = () => {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

    let handleChange = (e) => {
        setFormData(
          { 
             ...formData, [e.target.name]: e.target.value
          }
       )
    }

 let handleSignUp = async (e) => {
    e.preventDefault()
    try {
      console.log('-------------------');
      
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, formData)
      if (data.success) {
        console.log("signup sussessfully ", data);
        
        
      // Set localStorage values
        setToken(data.token);
        setUser(data.user);

        console.log(data.token);
        console.log(data.user);


        /// form fields empty again 
        setFormData(
          {
            name: "",
            email: "",
            password: ""
          }
        );

        setTimeout(() => {
          navigate("/");
        }, 200);

      } else {
        console.log("✔✔" , data.message , data);
      }
    } catch (e) {
      console.log("Signup Failed : ", e);
    }
  }


  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 animate__animated animate__fadeInDown">
      <div className="bg-white w-full max-w-md p-8 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign Up</h2>

        <form 
         onSubmit={handleSignUp}
        className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition">
            Create Account
          </button>

        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account? &nbsp;&nbsp;
          <NavLink 
             to="/login" className="text-black underline">
                    Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;