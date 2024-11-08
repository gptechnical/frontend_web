import React from 'react'
import Work from './Work'
import Counter from './Counter'
import Service from './Service'
import Contact from './Contact'
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-6 mt-5'>
            <h5>THIS IS ME.</h5>
            <h1 className='fw-bold'>GOURAV PRAJAPATI</h1>
            <TypeAnimation
              sequence={[ 
                'I Am Software Developer',
                1000, 
                'I Am Frontend Developer',
                1000,
                'I Am ReactJs Developer',
                1000,
                'I Am NodeJs Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.7em', display: 'inline-block', color: "#764BA2", fontWeight: "700" }}
              repeat={Infinity}
            />
            <p className="text_para">I'm Gourav Prajapati. I Graduated B.tech in computer science 
              from the JP Institute of Engineering & Technology, Meerut.</p>
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
              <h1 className='fw-bold'>My Bio-Data</h1><hr size='6' width="25%" style={{color: "#764BA2", opacity: "1"}}/>
              <p className="text_para">I'm Gourav Prajapati. I Graduated B.tech in computer science 
               from the JP Institute of Engineering & Technology, Meerut. I'm a frontend developer.
              </p>
             
              <h6>Design</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" 
                style={{ width: "80%", backgroundColor: "#ffa700", color: "#000000", fontWeight: "700" }}>80%</div>
              </div>
              <h6>HTML</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" 
                style={{ width: "90%", backgroundColor: "#ffa700", color: "#000000", fontWeight: "700" }}>90%</div>
              </div>
              <h6>CSS</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" 
                style={{ width: "85%", backgroundColor: "#ffa700", color: "#000000", fontWeight: "700" }}>85%</div>
              </div>
              <h6>JavaScript</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" 
                style={{ width: "75%", backgroundColor: "#ffa700", color: "#000000", fontWeight: "700" }}>75%</div>
              </div>
              <h6>MERN</h6>
              <div className="progress mb-4">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemax="100" 
                style={{ width: "70%", backgroundColor: "#ffa700", color: "#000000", fontWeight: "700" }}>70%</div>
              </div>
              <button className='btn py-2 px-4'>
                <a href="https://drive.google.com/file/d/1ZOZrWcC-WSc9oXjpAUqAIgFN1rV0f5Vl/view?usp=sharing" 
                target='_blank' className='text-white text-decoration-none'>DOWNLOAD CV</a></button>
            </div>
          </div>
        </div>
      </div>

      <Work/>
      <Counter/>
      <Service/>
      <section className='py-5 bg-dark text-center text-white'>
        <h1>I am available for freelancing</h1>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur 
          adipisicing elit. Eum voluptates similique nulla vitae natus</p>
        <button className='btn py-2 px-4 text-white'>HIRE ME</button>
      </section>
     <Contact/>
    </>
  )
}

export default Home;