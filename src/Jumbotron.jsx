import React from "react";
import { NavLink } from "react-router-dom";


const Jumbotron = (props) =>{

    return (
        <>

<div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
          <div className="row">
              <div className="col-md-7">
        <h1 className="display-5 fw-bold">{props.headertext}</h1>
        <p className="col-md-8 fs-4">{props.subheadertext}</p>
       
        <NavLink to={props.visit} className="btn btn-primary btn-lg" type="button">{props.btnName}</NavLink>
      </div>

      <div className="col-md-5 ">
      <img src={props.imgSrc} alt={props.imgSrc} />
      </div>
      </div>
      </div>
    </div>

    </>
    )
}

export default Jumbotron;