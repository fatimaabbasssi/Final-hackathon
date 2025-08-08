import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetPass = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/resetpass`,
        { token, password }
      );
      setPassword('');
      setConfirmPassword('');
      console.log(data?.message);
      navigate('/login');
    } catch (e) {
      console.log('Reset Password Failed:', e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center text-black">Reset Password</h1>
        <form onSubmit={handleResetPass} className="space-y-4">
          {/* Password Field */}
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <div className="relative">
              <input
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (confirmPassword && e.target.value !== confirmPassword) {
                    setError('Passwords do not match');
                  } else {
                    setError('');
                  }
                }}
                type={showPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block mb-1 text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (password !== e.target.value) {
                    setError('Passwords do not match');
                  } else {
                    setError('');
                  }
                }}
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Confirm your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600 hover:text-black"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 font-semibold">{error}</p>}

         
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition-all duration-200"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPass;