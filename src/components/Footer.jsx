import React from 'react'
import { Link } from 'react-router-dom'
import "../components/Footer.css";


function Footer() {
  return (
    <>
      <section className='container-fluid foot bg-dark text-white py-3'>

    <div className="foot_logo"> 
      <Link to='/'>
      <img src="images/gplogo.png" alt="logo" width="100px"/>
    </Link>
    </div>
    <div className="foll">Follow Me</div>
    <ul className="unord">
      <li><Link to="#"><i className="bi bi-facebook text-white fs-3"></i></Link></li>
      <li><Link to="#"><i className="bi bi-instagram text-white fs-3"></i></Link></li>
      <li><Link to="#"><i className="bi bi-linkedin text-white fs-3"></i></Link></li>
      <li><Link to="#"><i className="bi bi-twitter-x text-white fs-3"></i></Link></li>
    </ul>
    <hr className="border border-white border-1 opacity-90"/>
    <div className="copy_text">Copyright ©2024 All rights reserved | This template is made with  
       <i className="bi bi-heart"></i> by 
      <span style={{color: "orange", cursor: "pointer"}}> Gourav Prajapati.</span> </div>
        <footer className=" text-center text-white mt-3">CopyRight &copy; 2022 | All Rights Reserved.</footer>
      </section>
    </>
  )
}

export default Footer