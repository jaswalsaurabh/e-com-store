import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Products from './components/Products'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App