import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import NavBar from '../components/NavBar';
import Heading from '../components/Heading';
import axios from 'axios'

const SendMoney = () => {
    const [searchParams] = useSearchParams(); 
    const id= searchParams.get("id")
    const name=searchParams.get("name")

    const [amount,setAmount] = useState(0)
    let data = JSON.stringify({
        "to": id,
        "amount": amount
      });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/account/transfer',
        headers: { 
          'Authorization': "Bearer " + localStorage.getItem("token") , 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      
      

  return (
    <div>
        <NavBar />
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-white sm:px-16 p-8 flex flex-col border items-center rounded-md shadow'>   
                <Heading text={"Send Money"} />
                <h3 className='text-[2rem] mb-4 font-semibold'>You are sending to {name[0].toUpperCase()}{name.slice(1)}</h3>
                <div>
                    <input className='p-2 text-[1.5rem] border rounded' onChange={(e)=>{setAmount(e.target.value)}} type='number' placeholder='Amount' />
                </div>
                <button onClick={()=>{
                    axios.request(config)
                    .then((response) => {
                      console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }} className='border flex items-center p-4 m-4 rounded-xl bg-green-400 font-bold text-[1.25rem]'>Send Money <span className='text-[2rem]'>💸</span></button>
            </div>   
        </div> 
    </div>
  )
}

export default SendMoney