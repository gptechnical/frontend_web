import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  const auth = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const redirect = useNavigate();
  const logout = () => {
    localStorage.clear()
    redirect('/login');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top" 
      >
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">
          <img src='Images/gplogo.png' alt='gplogo' width="70px"/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/work">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/fetch">Fetch</Link>
              </li>
              {/* <li className="nav-item mt-1">
                <button onClick={() => logout()}>Logout | Welcome: {JSON.parse(email)}</button>
              </li> */}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bolder" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav