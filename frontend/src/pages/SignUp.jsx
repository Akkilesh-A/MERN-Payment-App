import React, { useState } from 'react'
import Heading from '../components/Heading'


const SignUp = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")


  return (
    <div className='flex flex-col h-[100vh] items-center justify-center'>
        <div className='bg-gray-100 sm:px-16 p-8 flex flex-col border rounded-md shadow'>   
            <Heading text={"Sign Up"} />
            <p className='text-gray-500 font-[1.5rem] mb-4'>Enter your credentials to create a new account</p>
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>Username</label>
            <input onChange={(e)=>{setUsername(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='example@gmail.com' />
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>Password</label>
            <input onChange={(e)=>{setPassword(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='Your Password here!' />
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>First Name</label>
            <input onChange={(e)=>{setFirstName(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='Your First Name here!' />
            <label className='mt-2 mb-2 text-[1.5rem] font-semibold'>Last Name</label>
            <input onChange={(e)=>{setLastName(e.target.value)}} className='border border-gray-500 rounded-md p-2' type='text' placeholder='Your Last Name here!' />
            <button className='border p-2 bg-black text-white rounded-md font-bold m-4'>Sign Up</button>
        </div>       
    </div>
  )
}

export default SignUp