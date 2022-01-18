import React from 'react'
import NewsImg from "./images/news-pic.webp"

const News = () => {
    return (
        <>
          <section id="news" className="news">
      <div className="container ">
      
        <header className="section-header">
          <h3>NEWS</h3>
         
        </header>


        

        <div className="row">        
          <div className="col-md-12 col-12 portfolio-details">

            <div className="" >
             
              <div className="row">
                <div className="col-md-4  p-4">
                  <div className="border background-white h-100">
                    <div className="position-relative w-100 background-cover" style={{height: 200 + 'px', backgroundImage: `url(${NewsImg})`}}>
                      <div className="position-absolute bg-dark" ></div>
                      <div className="position-absolute text-white d-flex flex-column justify-content-center align-items-center rounded-circle"  style={{top:10 + 'px', right:10  + 'px', width: 70 + 'px', height: 70 + 'px', backgroundColor: '#1d1f22'}}>
                        <small>30</small>
                        <small><b>JUN</b></small>
                      </div>
                      <a href="#" class="position-absolute px-3 py-2 text-white" style={{bottom:10 + "px", left: 10 + "px", backgroundColor: '#1d1f22' }}><small>NEWS</small></a>
                    </div>
                    <div className="px-3 pt-4 pb-3">
                      <a href="https://newsroom.neom.com/" target="_blank" className="d-inline-block"><h4 className="text-dark" >NEOM partners  largest coral garden</h4></a>
                      <p className="tex-secondary">Monday, June 21, 2021 — THUWAL, SAUDI ARABIA – NEOM Company  </p>
                      <div className="d-flex mt-4">
                        <div className="d-flex align-items-center mr-4">
                         
                          <small className="mt-1" >30th June 2021</small>
                        </div>
                        <div className="d-flex align-items-center">
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4  p-4">
                  <div className="border background-white">
                    <div className="position-relative w-100 background-cover" style={{height: 200 + 'px', backgroundImage: `url(${NewsImg})`}}>
                      <div className="position-absolute bg-dark" ></div>
                      <div className="position-absolute text-white d-flex flex-column justify-content-center align-items-center rounded-circle"  style={{top:10 + 'px', right:10  + 'px', width: 70 + 'px', height: 70 + 'px', backgroundColor: '#1d1f22'}}>
                        <small>30</small>
                        <small><b>JUN</b></small>
                      </div>
                      <a href="#" class="position-absolute px-3 py-2 text-white" style={{bottom:10 + "px", left: 10 + "px", backgroundColor: '#1d1f22' }}><small>NEWS</small></a>
                    </div>
                    <div className="px-3 pt-4 pb-3">
                      <a href="https://newsroom.neom.com/" target="_blank" className="d-inline-block"><h4 className="text-dark" >NEOM partners with KAUST to create the world's largest coral garden</h4></a>
                      <p className="tex-secondary">Monday, June 21, 2021 — THUWAL, SAUDI ARABIA – NEOM Company and King Abdullah University of Science and Technology </p>
                      <div className="d-flex mt-4">
                        <div className="d-flex align-items-center mr-4">
                         
                          <small className="mt-1" >30th June 2021</small>
                        </div>
                        <div className="d-flex align-items-center">
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4  p-4">
                  <div className="border background-white">
                    <div className="position-relative w-100 background-cover" style={{height: 200 + 'px', backgroundImage: `url(${NewsImg})`}}>
                      <div className="position-absolute bg-dark" ></div>
                      <div className="position-absolute text-white d-flex flex-column justify-content-center align-items-center rounded-circle"  style={{top:10 + 'px', right:10  + 'px', width: 70 + 'px', height: 70 + 'px', backgroundColor: '#1d1f22'}}>
                        <small>30</small>
                        <small><b>JUN</b></small>
                      </div>
                      <a href="#" class="position-absolute px-3 py-2 text-white" style={{bottom:10 + "px", left: 10 + "px", backgroundColor: '#1d1f22' }}><small>NEWS</small></a>
                    </div>
                    <div className="px-3 pt-4 pb-3">
                      <a href="https://newsroom.neom.com/" target="_blank" className="d-inline-block"><h4 className="text-dark" >NEOM partners with KAUST to create the world's largest coral garden</h4></a>
                      <p className="tex-secondary">Monday, June 21, 2021 — THUWAL, SAUDI ARABIA – NEOM Company and King Abdullah University of Science and Technology </p>
                      <div className="d-flex mt-4">
                        <div className="d-flex align-items-center mr-4">
                         
                          <small className="mt-1" >30th June 2021</small>
                        </div>
                        <div className="d-flex align-items-center">
                        
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
      
      
                
                
                
              </div>
              
            </div>
         
       

        </div>
      </div>
    
    </div>
    </section>

      
  
        </>
    )
}

export default News
