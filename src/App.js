import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fetch from './components/Fetch'
import Home from './components/Home'
import Nav from './components/Nav'
import Register from './components/Register'
import Update from './components/Update'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Service from './components/Service'
import Work from './components/Work'
import "./App.css"
import Login from './components/Login'
import 'animate.css'
import PrivateComponent from './components/PrivateComponent'
import LoginForm from './components/LoginForm'


function App() {
  return (
    <>
        {/* <LoginForm/> */}
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fetch" element={<Fetch />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<h1>404-Error Page Not Found</h1>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App