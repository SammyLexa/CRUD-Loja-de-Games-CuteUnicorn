import { useState } from 'react'
import './App.css'
import Home from './assets/pages/home/Home'
import Login  from './assets/pages/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './assets/components/static/footer/Footer'
import Navbar from './assets/components/static/navbar/Navbar'
import About from './assets/pages/about/About'
import Cadastro from './assets/pages/cadastro/Cadastro'
import Produtos from './assets/pages/produtos/Produtos'
import Faq from './assets/pages/faq/Faq'

function App() {

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes> // Antigo Switch
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre-nos" element={<About />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/faq" element={<Faq />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    )
  }

export default App
