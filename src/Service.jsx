import React from "react"
import Heading from "./Heading"
import Card from "./Card"
import Sdata from "./Sdata";
import web from "../src/images/map-viwer5.png";
import Jumbotron from "./Jumbotron";




const Service = () => {
  return (
    <>
   

   <Jumbotron headertext="Our Service" imgSrc={web} visit="/contact" subheadertext="Sub Heading Services" btnName="Go to Contact" />
   <Heading heading="Our Service" />
   <div className="container-fluid my-4">
       <div className="row">
           <div className="col-10 mx-auto">

            <div className="row">
                
                   
                  {
                      Sdata.map((value,index,array)=>{
                          return <Card 
                                  key={index}
                                  imgSrc = {value.imgSrc}
                                  cardTitle= { value.cardTitle}
                          />
                      })
                  }

          
            </div>

           </div>
       </div>
   </div>
   
    </>
  );
}

export default Service;