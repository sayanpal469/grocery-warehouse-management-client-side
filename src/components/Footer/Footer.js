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
<footer class="text-center text-lg-start bg-light text-muted">
  
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
    

    
    <div>
      <Link to="" class="me-4 icon text-reset">
        <BsFacebook className='facebook'></BsFacebook>
      </Link>
      <Link to="" class="me-4 icon text-reset">
        <BsInstagram className='insta'/>
      </Link>
      <Link to="" class="me-4 icon text-reset">
        <BsGithub className='github'/>
      </Link>
      <Link to="" class="me-4 icon text-reset">
        <GrTwitter className='twitter'/>
      </Link>
      <Link to="" class="me-4 icon text-reset">
        <BsLinkedin className='linkedIn'/>
      </Link>
    </div>
    
  </section>
 

 
  <section class="">
    <div class="container text-center text-md-start mt-5">
      
      <div class="row mt-3">
       
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
           <FcCamcorderPro className='camera-icon'/> Phonix Photography Pvt Ltd
          </h6>
          <p>
            Wild Life Photography Agency
          </p>
        </div>
        
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <Link to="#!" class="text-reset">Environmental Portraits</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Frame-filling Portraits</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Capture Behavior</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Gesture</Link>
          </p>
        </div>
        
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            About Us
          </h6>
          <p>
            <Link to="#!" class="text-reset">Company</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Work</Link>
          </p>
          <p>
            <Link to="#!" class="text-reset">Careers</Link>
          </p>
        </div>
        
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p>Bidhan Sarani Road Kolkata, West Bengal 700006 India</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Phonix.1@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  <div class="text-center p-4" style={{backgrounColor: '0, 0, 0, 0.05'}}>
    © 2022 Copyright-
    <Link class="text-reset fw-bold" to="https://mdbootstrap.com/">Phonix.com</Link>
  </div>
  
</footer>

    );
};

export default Footer;