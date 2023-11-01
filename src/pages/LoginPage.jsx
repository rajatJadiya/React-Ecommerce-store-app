import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <>
        <div className='fixed inset-0 w-full h-full bg-gray-100 z-[-10]'></div>
        <Login />
    </>
  )
}

export default LoginPage