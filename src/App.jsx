import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes,Link } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeholder/Placeorder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Login from './components/Login/Login'

const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
    <div className='App'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/placeorder" element={<Placeorder/>}/>
        

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App