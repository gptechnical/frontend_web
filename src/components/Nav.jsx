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
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/"><img src='Images/logo.png' alt='LoGo' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/work">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/service">SERVICE</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/fetch">FETCH</Link>
              </li>
              {/* <li className="nav-item mt-1">
                <button onClick={() => logout()}>Logout | Welcome: {JSON.parse(email)}</button>
              </li> */}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/register">REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">LOGIN</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav