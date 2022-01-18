import React from 'react'
import AboutVideos from "./images/NEOM-Technology-Animation.mp4"

const AboutVideo = () => {
    return (
        <>
               <section id="about">
      <div className="bg-video-wrap" >
        <video src={AboutVideos} loop muted autoplay >
        </video>

     
        <div className="overlay">
              

        </div>
        
        <div className="about-container">
           <div className="container">
           <div className="about-content">
             <div>
              <h3>ABOUT NEOM GEO EXPLORER</h3>
              <p>NEOM Geo Explorer is a Web-based geographic information platform providing access to base layers and
                datasets from different sectors.</p>
              </div>
              </div>
           </div>
        </div>

        
      </div>
    </section>  
        </>
    )
}

export default AboutVideo
