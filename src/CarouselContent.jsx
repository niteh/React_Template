import React from "react";

import CarouselData from "./CarouselData";
import img1 from "../src/images/home.png";
import img2 from "../src/images/index.png";


const CarouselContent = () =>{

    return (
        <>
     <section id="intro">
      <div className="intro-container">

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
  {
  CarouselData.map((data,index)=>{
     return(
      
      <div className="carousel-item ${`{className === carousel-item ? carousel-item active : 'carousel-item '}`}" >
      <img src={data.imgSrc} className="d-block w-100" alt="..."/>
    </div>
    
    
    )
  })
 }
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
        </>
    )
}

export default CarouselContent;