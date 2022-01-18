import React from 'react'
import Carousel from 'react-bootstrap/Carousel' 
import CarouselData from "./CarouselData";
import img1 from "../src/images/home.png";
import img2 from "../src/images/index.png";

const BannerCarousel = () => {
    return (
        <>
         <section id="intro">
      <div className="intro-container">
          <Carousel fade>

          {
  CarouselData.map((data,index)=>{
     return(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={data.imgSrc}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

     )
  })
}
  
 
</Carousel>  
</div>
</section>
        </>
    )
}

export default BannerCarousel
