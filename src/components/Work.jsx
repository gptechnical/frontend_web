import React from 'react'

function Work() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <h1 className='fw-bold mt-5'>Latest Works</h1><hr width="25%" size="6" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex <br />eos commodi provident tempore possimus, mollitia vero quas.</p>
            <button className='btn py-2 px-4 text-white'>WEBSITES</button> <button className='btn py-2 px-4 text-white'>YOUTUBE</button> <button className='btn py-2 px-4 text-white'>DESIGN</button>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <img className='img-fluid' src="Images/1.jpg" alt="image3" />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <img className='img-fluid' src="Images/2.jpg" alt="image3" />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <img className='img-fluid' src="Images/3.jpg" alt="image3" />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
            <img className='img-fluid' src="Images/4.jpg" alt="image3" />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
            <img className='img-fluid' src="Images/5.jpg" alt="image3" />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
            <img className='img-fluid' src="Images/6.jpg" alt="image3" />
          </div>
        </div>
      </div>
      {/* <section className='bg-dark text-center text-white'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-sm-3 col-md-3 col-lg-3 my-5'>
              <h4>200+</h4>
              <div>Project Completed</div>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 my-5'>
              <h4>500+</h4>
              <div>Happy clients</div>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 my-5'>
              <h4>700+</h4>
              <div>cups of coffee</div>
            </div>
            <div className='col-sm-3 col-md-3 col-lg-3 my-5'>
              <h4>1000+</h4>
              <div>real professionals</div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Work