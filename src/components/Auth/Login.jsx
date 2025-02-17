import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import Toggle from '../Other/Toggle';

const Login = ({ handleLogin }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme] = useContext(ThemeContext)

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Toggle />
      <div className='flex h-screen w-screen items-center justify-center' style={{ backgroundColor: theme.backgroundColor }}>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
          <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
            <InputField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              theme={theme}
            />
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              theme={theme}
            />
            <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const InputField = ({ type, value, onChange, placeholder,theme}) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    required
    className='outline-none border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
    placeholder={placeholder}
    style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
  />
);

export default Login;