import React from "react"

import Jumbotron from "./Jumbotron";
import web from "../src/images/map-viwer3.png";
import webFirst from "../src/images/map-viwer5.png";

import SampleContent from "./SampleContent";
import Heading from "./Heading";






const About = () => {
  return (
    <>
  
   <Jumbotron headertext="Heading About" imgSrc={web} visit="/contact" subheadertext="Sub Heading About" btnName="Go to Contact" />

   <Heading heading="About " />

   <Heading heading="Our Organization" />
   <SampleContent imgSrc={webFirst} contentText="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."/>
    </>
  );
}

export default About;