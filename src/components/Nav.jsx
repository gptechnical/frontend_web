import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const redirect = useNavigate();
  const logout = () => {
    localStorage.clear()
    redirect('/login');
  }
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top" 
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
          <img src='Images/gplogo.png' alt='gplogo' width="70px"/></Link>
          <button onClick={toggleMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
             {isOpen ? <i class="bi bi-x-circle"></i> : <i class="bi bi-list"></i>}
          </button>
         
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/work">About</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/fetch">Fetch</Link>
              </li>
              {/* <li className="nav-item mt-1">
                <button onClick={() => logout()}>Logout | Welcome: {JSON.parse(email)}</button>
              </li> */}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        
          {isOpen && (
            <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/work">About</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/fetch">Fetch</Link>
              </li>
              {/* <li className="nav-item mt-1">
                <button onClick={() => logout()}>Logout | Welcome: {JSON.parse(email)}</button>
              </li> */}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Login</Link>
              </li>
            </ul>
          </div>
          )}
          
        </div>
      </nav>
    </>
  )
}

export default Nav