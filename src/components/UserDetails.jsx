import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
   const {name} = useParams()
   const navigate =  useNavigate()

   const GoBackHandler = () => {
    //  navigate("/user");
     navigate(-1);
   }
  return (
    <div className='p-10 flex flex-col items-center gap-4'>
    <h1 className='text-3xl font-semibold text-red-500'>User Details</h1>
    <h2 className='text-lg font-semibold uppercase'>{name}</h2>
    <button onClick={GoBackHandler} className='bg-zinc-400 text-zinc-100 px-2 py-2 rounded-md'>GO Back!</button>
  </div>
  )
}

export default UserDetails
