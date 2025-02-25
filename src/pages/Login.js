import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add axios for API calls

// Import custom components
import InputField from "../components/inputField";

// Images
import mainBg from '../assets/img/main-bg.jpeg';
import mainLogo from '../assets/img/main-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        email,
        password,
      });

      // Save token to localStorage and redirect
      localStorage.setItem('authToken', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="h-screen grid md:grid-cols-2 grid-cols-1">
      {/* Left Section */}
      <div
        className="w-full flex justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="grid content-between p-6">
          <div className="w-full flex justify-center">
            <img
              src={mainLogo}
              alt="AquaHub"
              className="w-3/4"
            />
          </div>
          <div className='w-full flex justify-end'>
            <h4 className='text-right text-4xl font-bold text-white'>Welcome to<br /><span className='text-yellow'>Aquahub</span></h4>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full bg-white flex items-center justify-center">
        <div className="w-3/5 grid text-center">
          <h2 className="text-3xl font-bold text-center text-darkblue mb-6">LOGIN</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username Field */}
            <InputField
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon="fa-user"
            />
            {/* Password Field */}
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon="fa-lock"
            />
            <div className="text-gray-500">
              Forgot your password?{' '}
              <a onClick={() => navigate('/recovery')} className="text-sm text-blue-500">
                Recover
              </a>
            </div>
            <button
              type="submit"
              className="w-1/2 bg-darkblue rounded-full text-white py-3 rounded-lg hover:bg-blue-900"
            >
              Login Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;