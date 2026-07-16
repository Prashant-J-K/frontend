import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes,Link } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeholder/Placeorder'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='App'>
      <Navbar/>
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