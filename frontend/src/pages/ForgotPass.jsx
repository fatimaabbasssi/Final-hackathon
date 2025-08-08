import React, { useState } from 'react'
import axios from 'axios'


const ForgotPass = () => {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  ////////// handling Forget password

  const handleForgotPass = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/forgotPass`, { email })
      setEmail("");
      setMessage(data.message);
      
    } catch {
      (e) => {
        console.log("Forgot session Failed : ", e);

      }
    }
  }



  return (
   <>
       <div className="flex items-center px-4 justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-xl">
        <form 
       onSubmit={handleForgotPass} 
        className="space-y-4">
          {message && <p className='text-green-500'>{message}</p>}
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-all duration-200"
          >
            Reset
          </button>
        </form>
      </div></div>


   </>
  )
}

export default ForgotPass