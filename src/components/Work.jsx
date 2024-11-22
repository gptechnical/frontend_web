import React, { useState } from 'react';
import "../components/Work.css";

function Work() {
  const [activeTab, setActiveTab] = useState("websites");

  const handleTabClick = (website) => {
      setActiveTab(website)
  }

  return (
    <>
      <div className='container' style={{paddingTop: "50px"}}>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <h1 className='fw-bold pt-4'>Latest Works</h1><hr width="25%" size="6" style={{color: "#764BA2", opacity: "1"}}/>
            <button className={activeTab === "websites" ? "active" : ""} onClick={() => handleTabClick("websites")}>WEBSITES</button> 
            <button className={activeTab === "youtube" ? "active" : ""} onClick={() => handleTabClick("youtube")}>YOUTUBE</button> 
            <button className={activeTab === "design" ? "active" : ""} onClick={() => handleTabClick("design")}>DESIGN</button>
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row g-3'>
          {activeTab === "websites" && 
         <>
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
         </>
          }
          {activeTab === "youtube" && 
          <>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/7.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/8.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/9.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
          <img className='img-fluid' src="Images/10.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
          <img className='img-fluid' src="Images/11.jpg" alt="image3" />
        </div>
          </>
          }
          {activeTab === "design" && 
          <>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/12.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/13.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4'>
          <img className='img-fluid' src="Images/14.jpg" alt="image3" />
        </div>
        <div className='col-sm-4 col-md-4 col-lg-4 mt-4'>
          <img className='img-fluid' src="Images/15.jpg" alt="image3" />
        </div>
          </>
          }
        </div>
      </div>
      
    </>
  )
}

export default Work