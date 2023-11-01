import React from 'react'
import Navbar from '../components/Navbar'
import SignUp from '../components/SignUp'

const SignUpPage = () => {
  return (
    <>
        <div className='bg-gray-100 fixed inset-0 w-full h-full z-[-10]'></div>
        <SignUp />
    </>
  )
}

export default SignUpPage