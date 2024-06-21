import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className='p-10 flex flex-col items-center gap-4'>
      <h1 className='text-3xl font-semibold text-red-500'>User</h1>
      <div className='flex flex-col text-xl p-3 gap-4 w-[20%]'>
      
            <Link className='bg-red-200 hover:bg-red-400 ' to="/user/john">John</Link>
            <Link className='bg-red-200 hover:bg-red-400 ' to="/user/ayush">Ayush</Link>
            <Link className='bg-red-200 hover:bg-red-400 ' to="/user/anubhav">Anubhav</Link>
    </div>

    <Outlet />
    </div>
  )
}

export default User
