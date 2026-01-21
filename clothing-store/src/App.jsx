import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Men from './pages/Men'
import Women from './pages/Women'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'
import './App.css'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
      <CartDrawer />
    </CartProvider>
  )
}

export default App
