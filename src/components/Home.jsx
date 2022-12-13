import React from 'react'


function Home() {

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-6 mt-5'>
            <h5>THIS IS ME.</h5>
            <h1 className='fw-bold'>GOURAV TECHNICAL</h1>
            <p>I'm Gourav Prajapati. A Full stack Developer, youtuber and freelancer. A Full stack Developer, youtuber and freelancer.</p>
            <button className='btn py-2 px-4 text-white'>HIRE ME</button>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-6 text-center'>
            <img className='img-fluid rounded-circle' src="Images/hero.jpg" alt="image1" style={{ "maxWidth": "73%", "maxHeight": "73%", "zIndex": "1" }} />
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-6 col-lg-6 mt-5'>
              <img className='img-fluid rounded' src="Images/biodata.jpg" alt="image2" style={{ "maxWidth": "80%", "maxHeight": "85%", "boxShadow": "-20px -20px 0px 0px var(--helper)" }} />
            </div>
            <div className='col-sm-6 col-md-6 col-lg-6 mt-4'>
              <h1 className='fw-bold'>My Bio-Data</h1><hr size='6' width="25%" color="red" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus eum quibusdam, blanditiis nobis dolor distinctio asperiores itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere</p>
              <p>itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere quod placeat praesentium.</p>
              <h6>Design</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" style={{ "width": "80%" }}>80%</div>
              </div>
              <h6>HTML</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" style={{ "width": "90%" }}>90%</div>
              </div>
              <h6>CSS</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" style={{ "width": "85%" }}>85%</div>
              </div>
              <h6>JavaScript</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" style={{ "width": "75%" }}>75%</div>
              </div>
              <h6>MERN</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" style={{ "width": "70%" }}>70%</div>
              </div>
              <button className='btn py-2 px-4 text-white'>DOWNLOAD CV</button>
            </div>
          </div>
        </div>
      </div>

      {/* Project part start */}
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
      <section className='bg-dark text-center text-white'>
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

      {/* Service part start */}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <h1 className='fw-bold mt-5'>Service Offers</h1><hr width="25%" size="6" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ex <br />dolores tempore possimus, mollitia vero quas</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Web Design</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Web Development</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Photography</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Clipping Path</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Apps Interface</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <div className="card my-5 text-center" style={{ "width": "22rem" }}>
              <i className="bi bi-laptop mt-5"></i>
              <div className="card-body">
                <h5 className="card-title text-black">Graphic Design</h5>
                <p className="card-text mb-5">“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className='py-5 bg-dark text-center text-white'>
        <h1>I am available for freelancing</h1>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum voluptates similique nulla vitae natus</p>
        <button className='btn py-2 px-4 text-white'>HIRE ME</button>
      </section>

      {/* Contact Us Part */}
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <h1 className='fw-bold mt-5'>Contact Us</h1><hr width="25%" size="6" />
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row justify-content-center'>
          <div className='col-sm-8 col-md-8 col-lg-8'>
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
            {/* <div className="input-group mb-3">
              <input type="text" className="form-control py-2" placeholder="Username" aria-label="Username" />
              <span className="input-group-text"></span>
              <input type="email" className="form-control" placeholder="Email Id" aria-label="Email Id" />
            </div>
            <div className="input-group mb-3">
              
              <input type="text" className="form-control py-2" placeholder="Subject" aria-label="Subject" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
             
              <textarea className="form-control" aria-label="Message" placeholder='Message' rows={5}></textarea>
            </div>
            <button className='btn my-3 py-2 px-4 text-white'>SEND MESSAGE</button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default Home