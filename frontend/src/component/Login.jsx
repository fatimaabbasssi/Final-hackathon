import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { setToken, setUser } from "../utils/auth";
const Login = () => {

    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    //////////onchange

    let handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name]: e.target.value
      }
    )
  }


  ///////////handleLogin

    const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          email: formData.email,
          password: formData.password
        })
      if (data.success) {
        setToken(data.token);
        setUser(data.user)

        console.log("user logged in " , data.user);
        
        /// reset form
        setFormData(
          {
            name: "",
            email: "",
            password: ""
          }
        );
        navigate("/")

      } else {
        console.log("Login------ ", data.message , data);
      }

    } catch {
      (e) => {
        console.log("Login Failed : ", e);

      }
    }
  }

  

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4  animate__animated animate__fadeInDown">
            <div className="bg-white w-full max-w-md p-8 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold text-black mb-6 text-center">Login</h2>

                <form 
                onSubmit={handleLogin} 
                className="space-y-5">
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

                    <NavLink to='/forgotPass' className="text-gray-600 font-bold hover:text-gray-800">
                        Forget password?
                    </NavLink>
                    <br /><br />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600 mt-4">
                    Don’t have an account? &nbsp;&nbsp;
                    <NavLink to="/signup" className="text-black underline">
                           signUp
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;