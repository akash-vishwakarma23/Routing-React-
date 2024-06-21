import React from 'react'
import About from '../components/About'
import User from '../components/User'
import Home from '../components/Home'
import { Route, Routes } from 'react-router-dom'


const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/user' element={<User />} />
    <Route path='/about' element={<About />} />
  </Routes>
  )
}

export default Routing
