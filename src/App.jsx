import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import HomePage from './pages/HomePage'
import PageNoteFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'

const App = () => {
  return (
    <div><BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
        <Route path='*' element={<PageNoteFound/>} />
    </Routes>
</BrowserRouter></div>
  )
}

export default App