import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (
        <>
      <div className="col-md-4 col-10 gy-4">
                      <div className="card" >
  <img src={props.imgSrc} className="card-img-top max-height-300" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.cardTitle}</h5>
    <p className="card-text">{props.cardContent}</p>
    <NavLink to="/" className="btn btn-primary btn-outline">Conctact Us</NavLink>
  </div>
</div>
</div>

        </>
    )
}

export default Card;