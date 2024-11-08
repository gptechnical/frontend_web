import React from 'react'

const Counter = () => {
  return (
    <>
      <section className='text-center text-white' style={{ backgroundColor: "#764BA2" }}>
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
      </section>

    </>
  )
}

export default Counter;
