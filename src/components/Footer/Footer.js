import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { FcCamcorderPro } from "react-icons/fc";
import './Footer.css'


const Footer = () => {
    return (
<footer className="text-center text-lg-start bg-dark text-muted">
  
  <section
    className="d-flex  justify-content-center justify-content-lg-between p-4 border-bottom text-white"
  >
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
    

    
    <div className=''>
      <Link to="" className="me-4 icon text-reset">
        <BsFacebook className='facebook'></BsFacebook>
      </Link>
      <Link to="" className="me-4 icon text-reset">
        <BsInstagram className='insta'/>
      </Link>
      <Link to="" className="me-4 icon text-reset">
        <BsGithub className='github'/>
      </Link>
      <Link to="" className="me-4 icon text-reset">
        <GrTwitter className='twitter'/>
      </Link>
      <Link to="" className="me-4 icon text-reset">
        <BsLinkedin className='linkedIn'/>
      </Link>
    </div>
    
  </section>
 

 
  <section className="">
    <div className="container text-white text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h4 className="text-uppercase fw-bold mb-4">
           Healthy Piorr
          </h4>
          <p>
          Revolutionizing the Fresh Produce Supply Chain
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Resources
          </h6>
          <p>
            <Link to="#!" className="text-reset">Terms & Conditions</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Privacy Policy</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Refund and Cancellation Policy</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Reach Us</Link>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Company
          </h6>
          <p>
            <Link to="#!" className="text-reset">About Us</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Buy/Sell</Link>
          </p>
          <p>
            <Link to="#!" className="text-reset">Careers</Link>
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p>Bidhan Sarani Road Kolkata, West Bengal 700006 India</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            healthyPiorr.1@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  <div className="text-center text-white p-4" style={{backgrounColor: '0, 0, 0, 0.05'}}>
    © 2022 Copyright-
    <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">Phonix.com</Link>
  </div>
  
</footer>

    );
};

export default Footer;