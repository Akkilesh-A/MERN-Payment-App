import React, { useEffect } from 'react'
import axios from 'axios'

const NavBar = () => {

  useEffect(()=>{
    axios.get()
  })
  return (
    <div className='flex border-b p-4 justify-between items-center'>
        <div>
            <h1 className='text-[2rem] font-extrabold'>PaymentsApp</h1>
        </div>
        <div className='flex items-center'>
            <h1>Akkilesh</h1>
        </div>
    </div>
  )
}

export default NavBar