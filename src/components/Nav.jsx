import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='p-3 flex gap-10 items-center justify-center font-medium'>
        <NavLink to="/">
            {(e)=>{
                return (
                    <span className={[
                         e.isActive? 'text-red-300' : '',
                         e.isActive? 'font-bold' : ''
            ].join(" ")}
              >Home</span>
            )
            }}
        </NavLink>
        <NavLink style={(e)=>{
            return {
                color : e.isActive ? '#FCA5A5' : '',
                fontWeight : e.isActive ? 'bold' : ''
            }
        }} to="/user">User</NavLink>
        <NavLink className={(e)=>{
            return [
                e.isActive? 'text-red-300' : '',
                e.isActive? 'font-bold' : ''
            ].join(" ")
               
        }} to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav
