import React from "react"
import Heading from "./Heading";
import Jumbotron from "./Jumbotron";
import web from "../src/images/map-viwer3.png";



const Contact = () => {
  return (
    <>
  <Heading heading="Welcome Contact" />
  
   
  <Jumbotron headertext="Heading About" imgSrc={web} visit="/contact" subheadertext="Sub Heading About" btnName="Go to Contact" />
  <div className="container-fluid">
       <div className="row">
           <div className="col-6 mx-auto">

           <div className="mb-3">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="contactNo" className="form-label">Contact No</label>
    <input type="number" className="form-control" id="contactNo" />
  </div>

  <div className="mb-3">
    <label for="emailID" className="form-label">Email ID</label>
    <input type="email" className="form-control" id="emailID" />
  </div>

  <div className="mb-3">
    <label for="message" className="form-label">Contact No</label>
    <textarea className="form-control" id="message" ></textarea>
  </div>
  
  <button type="submit" className="btn btn-outline-success" >Submit</button>

           </div>
       </div>
   </div>

    </>
  );
}

export default Contact;