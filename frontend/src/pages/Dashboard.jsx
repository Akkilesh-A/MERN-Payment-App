import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [balance,setBalance] = useState(0)
    const [user,setUser] = useState([])
    const [userSearch,setUserSearch] = useState("")
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/api/v1/account/balance")
    //     .then(response=>{
    //         setBalance(response.data.balance)
    //     })
    // })

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk"+"?filter="+userSearch)
        .then(response=>{
            setUser(response.data.user)
        }) 
    },[userSearch])

  return (
    <div>
        <NavBar />
        <div className='p-8 flex flex-col'>
            <h2 className='font-bold text-[2rem] mb-3'>Your Balance - Rs {balance}</h2>
            <h2 className='font-semibold text-[1.5rem] mb-3'>Users</h2>
            <input className='p-4 rounded-md' type='text' onChange={(e)=>{setUserSearch(e.target.value)}} placeholder='Search Users...' />
            <h2>{user.map(user=><User user={user} />)}</h2>
        </div>
    </div>
  )
}

const User = (props) => {
    return (
      <div className='text-s px-4 m-2 flex items-center justify-between'>
          <h2>{props.user.firstName.toUpperCase()} {props.user.lastName.toUpperCase()}</h2>
          <button className='bg-green-400 border p-2 rounded-xl' ><Link to={"/send?id=" + props.user._id + "&name=" + props.user.firstName}>Send Money!</Link></button>
      </div>
    )
}

export default Dashboard