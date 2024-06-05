import React, { useState } from 'react'
import Heading from '../components/Heading'


const SignIn = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] =useState("")
  return (
    <div className='flex flex-col h-[100vh] items-center justify-center'>
        <div className='bg-white flex flex-col sm:px-16 p-8  rounded-md shadow '>   
            <Heading text={"Sign In"} />
            <p className='text-gray-500 font-[1.5rem] mb-4'>Enter your credentials to access your account</p>
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>Username</label>
            <input onChange={(e)=>{setUsername(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='Your Username here!' />
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='Your Password here!' />
            <button className='border py-2 my-8 bg-black text-white rounded-md font-bold mx-8'>Sign In</button>
        </div>       
    </div>
  )
}

export default SignIn