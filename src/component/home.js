import React from 'react';
import {faEnvelope,faTruckFast,faBriefcase,faArrowRight,faShip,faCalendarDays,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function home() {
  return (
  <>
  <div className='container'>
      <div className='nav_container'>
        <div className='logo'><span className='logo1'>Ship</span><span className='logo2'>mate.</span></div>
        <div className='nav_comp'>
        <div type="button"className='learn'>Learn More</div>
        <div type="button" className='login'>Login</div>
        </div>
    </div>
   

<div className='comapny-container'>
<div className='company-title'>Hassle-Free Shipping Solutions</div>
<div className='conmapny-info'>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</div>
</div>


<div className='service-info'>
  <div className='grp1'>
    <span className='arrawright'>
      <span className='arrow'><FontAwesomeIcon style={{marginTop:"10px"}}icon={faArrowRight} />
        </span></span>
    <span className='line4'></span>
    <span className='load'>
     <span className='orgin-logo'><FontAwesomeIcon icon={faShip} /></span>
    <span className='load-title'>Load</span>
    </span>
    <span className='line2'></span>
    <span className='date'>
    <span className='orgin-logo'><FontAwesomeIcon icon={faCalendarDays} /></span>
    <span className='date-title'>date</span>
    </span>
    <span className='line3'></span>
    <span className='destination'>
    <span className='orgin-logo'><FontAwesomeIcon icon={faLocationDot}/></span>
    <span className='destination-title'>Destination,Port,City</span>
    </span>
    <span className='line1'></span>
  
    <span className='orgin'>
      <span className='orgin-logo'><FontAwesomeIcon icon={faLocationDot} /></span>
      <span className='orgin-title'>Orgin,Port,City</span>
      </span>
  
  </div>
</div>


<div className='card-container'>
  <div className='card-title'>Services</div>
  <div className='card_collection'>


  <div className="card">
    <div className='fs-title-main'>
        <div className='fs-logo'><FontAwesomeIcon icon={faShip} /></div>
        <div className='fs-title'>Freight Services</div>
     </div>
     <div className='fs-line'></div>
    <div className="fs-text">Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.</div>
</div>

<div className="card">
<div className='bs-title-main'>
       <div className='bs-logo'><FontAwesomeIcon icon={faBriefcase} /></div>
      <div className='bs-title'>Business Services</div>
  </div>
    <div className='fs-line'></div>
    <div className="bs-text">We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</div>
</div>


<div className="card">
<div className='sl-title-main'>
      <div className='sl-logo'><FontAwesomeIcon icon={faTruckFast} /></div>
      <div className='sl-title'>Shipping & Logistics</div>
   </div>
      <div className='fs-line'></div>
    <div className="sl-text">Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</div>
</div>

<div className="card-s">
<div className='s-title-main'>
<div className='s-logo'><FontAwesomeIcon icon={faShip} /></div>
      <div className='s-title'>24/7 Support</div>
      </div>
      <div className='fs-line'></div>
    <div className="support-text">Receive support from our experts all over the world at every stage of the process, 24/7.</div>

</div>
  </div>
  </div>
  <div className='message'>
  <div className='m-logo'><FontAwesomeIcon icon={faEnvelope} style={{position: "absolute",
left: "20.25%",
top: "20.25%",
opacity:"1",
fontSize:"50px"
}} /></div>
</div>
<div className='wave-container'>
  <div className='wave1'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -120 1400 350"><path fill="#7357ff" fill-opacity="1" d="M0,32L24,32C48,32,96,32,144,64C192,96,240,160,288,186.7C336,213,384,203,432,176C480,149,528,107,576,122.7C624,139,672,213,720,224C768,235,816,181,864,170.7C912,160,960,192,1008,202.7C1056,213,1104,203,1152,165.3C1200,128,1248,64,1296,69.3C1344,75,1392,149,1416,186.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
  </div>
  
  <div className='wave2'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 -150 1400 350"><path fill="#8C76FF" fill-opacity="1" d="M0,256L24,218.7C48,181,96,107,144,106.7C192,107,240,181,288,186.7C336,192,384,128,432,138.7C480,149,528,235,576,224C624,213,672,107,720,58.7C768,11,816,21,864,64C912,107,960,181,1008,176C1056,171,1104,85,1152,64C1200,43,1248,85,1296,106.7C1344,128,1392,128,1416,128L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg></div>
</div>
</div>
  </>
  );
}

export default home;
