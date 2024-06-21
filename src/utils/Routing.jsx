import React from 'react'
import About from '../components/About'
import User from '../components/User'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../components/UserDetails'


const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/user' element={<User />}>
    {/* <Route path='/user/:name' element={<UserDetails />} /> for opening same page */}
    </Route>
    
    <Route path='/user/:name' element={<UserDetails />} />    {/* for opening other page */} 
    <Route path='/about' element={<About />} />
  </Routes>
  )
}

export default Routing
