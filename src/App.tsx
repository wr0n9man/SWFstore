import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './globalStyles'
import { Main } from './pages/main/Main'
import { Product } from './pages/product/Product'
import { Header } from './ui/Header'

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <GlobalStyle />

      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
