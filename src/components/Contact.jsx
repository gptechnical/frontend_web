import React from 'react'

function Contact() {
  return (
    <>
      <section className='container'>
        <h1 className='fw-bold mt-5'>Contact Us</h1><hr className='border border-dark border-2 opacity-30' width='20%' />
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-6'>
            <div className="contact-form bg-white" style={{ padding: "30px" }}>
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="form-row">
                  <div className="control-group col-sm-6">
                    <input type="text" className="form-control p-3" id="name" placeholder="Your Name"
                      required="required" data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group col-sm-6">
                    <input type="email" className="form-control p-3" id="email" placeholder="Your Email"
                      required="required" data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control p-3" id="subject" placeholder="Subject"
                    required="required" data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea className="form-control py-3 px-4" rows="5" id="message" placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">SEND MESSAGE</button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.809370059322!2d77.37256633488771!3d28.602636099999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce562d7e60fed%3A0x3c6e0a98cd53af87!2sMamura%2C%20Sector%2066%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1658217512169!5m2!1sen!2sin" width="600" height="440" style={{ border: 0 }} allowFullScreen="" loading="lazy" title='map' referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
