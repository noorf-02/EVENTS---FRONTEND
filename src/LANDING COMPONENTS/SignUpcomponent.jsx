import React from 'react'
import {Link} from 'react-router-dom'

function SignUpcomponent() {
  return (
    <div className='wrapper flex flex-col gap-10 items-center h-[85dvh] justify-center'>
      <p className='font-bold text-3xl text-[#2c2c2c]'>Create an Account</p>
      <form action="" className='flex flex-col gap-6'>
          <input type="text" className='border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl' placeholder='First Name'/>
          <input type="text" className='border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl' placeholder='Last Name'/>
          <input type="email" className='border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl' placeholder='Email'/>
          <input type="text" className='border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl' placeholder='Username'/>
          <input type="password" className='border-1 border-gray-200 w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl' placeholder='Password'/>
          <button className='bg-purple-700 hover:bg-purple-600 transition-all duration-300 cursor-pointer text-white font-medium w-[320px] sm:w-[400px] py-2 px-4 focus:outline-none rounded-3xl'>Sign Up</button>
          <p>Already have an account? <Link to={'/log-in'} className='italic underline'>LogIn</Link></p>
      </form>
    </div>
  )
}

export default SignUpcomponent
