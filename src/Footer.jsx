import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {

    return (
        <>
        
         
          
 <footer id="footer" >
  <div className="footer-top ">
    <div className="container">
      <div className="row">

        <div className="col-lg-6 col-md-8 footer-links">
          <h2 className="b-footer__title">WELCOME TO OUR LIVING LABORATORY <strong>A PLACE WHERE ENTREPRENEURSHIP WILL CHART THE COURSE   FOR THE NEW FUTURE.</strong></h2>
            
            
            <div className="copyright ">
              <Link to="#" id="contact-button"> Contact </Link>
              <Link to="https://www.neom.com/en-us/privacy-policy" target="_blank"> Privacy Policy </Link>
              <Link to="https://www.neom.com/en-us/terms-of-use" target="_blank"> Term of Use </Link>
              <Link to="https://www.neom.com/en-us/cookie-policy" target="_blank"> Cookie Policy</Link>
              <span> © 2021 NEOM </span>
            
            </div>
            
          
         
          
        
        </div>

       

      

      </div>
    </div>
  </div>


</footer>

     

        </>
    )
}

export default Footer;