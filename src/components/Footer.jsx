import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <section className='bg-dark text-white py-5'>
        <div className='container-fluid px-3'>
          <div className='row'>

            <div className='col-sm-4 col-md-4 col-lg-4'>
              <div className='ms-5 text-center'>
                <h4 className='animate__animated animate__backInDown'>ABOUT US</h4>
                <p className='p_justify fs-6 text_white'>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience. Hope you like it.</p>
              </div>

              <div className='mt-4 f-social-icons'>
                <span className='ms-5 fs-5 text_white'>FOLLOW US</span>
                <i className="bi bi-facebook fs-2 ms-5 icons"></i>
                <i className="bi bi-instagram fs-2 m-2 icons"></i>
                <i className="bi bi-linkedin fs-2 m-2 icons"></i>
                <i className="bi bi-twitter fs-2 m-2 icons"></i>
              </div>
            </div>
            <div className='col-sm-2 col-md-2 col-lg-2'>
              <h4 className='ms-5 animate__animated animate__backInDown'>USEFULL LINKS</h4>
              <ul style={{ listStyleType: "none" }} className='p_justify text-start'>
                <li className="bi bi-arrow-right-short ms-2"><Link to="/" className='text_white'>Home</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="/work" className='text_white'>About</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="/contact" className='text_white'>Contect</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="/service" className='text_white'>Service</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="/register" className='text_white'>Register</Link></li>
              </ul>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3'>
              <h4 className='ms-5 animate__animated animate__backInDown'>OUR SERVICES</h4>
              <ul style={{ listStyleType: "none" }}>
                <li className="bi bi-arrow-right-short ms-2"><Link to="#" className='text_white'>Web Design</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="#" className='text_white'>Web Development</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="#" className='text_white'>Mern Project</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="#" className='text_white'>Online Classes</Link></li>
                <li className="bi bi-arrow-right-short ms-2"><Link to="#" className='text_white'>Youtube Course</Link></li>
              </ul>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3'>
              <h4 className='animate__animated animate__backInDown'>CONTECT US</h4>
              <address>
                <b className='text_white'> Meerut, India</b><br />
                <Link to="mailto: gourav@gmail.com" className='text_white'>gourav@gmail.com</Link>
                <p><Link to="tel: +9179832****5" className='text_white'>+91 79832****5</Link></p>
              </address>
              <div className="w-75">
                <div className="input-group">
                  <input type="text" className="form-control border-light" style={{ padding: "10px" }} placeholder="Your Email" />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-2 py-3">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='border border-white border-1 opacity-10 mt-4' />
        <footer className=" text-center text-white mt-3">CopyRight &copy; 2022 | All Rights Reserved.</footer>
      </section>
    </>
  )
}

export default Footer