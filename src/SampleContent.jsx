import React from 'react'

const SampleContent = (props) => {
    return (
        <>
          <div className="container">
              <div className="row mb-4">
                 
                 <div className="col-md-8">
                  <p >{props.contentText}</p>
                 </div>
                 <div className="col-md-4">
                  <img src={props.imgSrc} />
                 </div>

              </div>


              <div className="row mb-4">
              <div className="col-md-4">
                  <img src={props.imgSrc} />
                 </div>
                 <div className="col-md-8">
                  <p >{props.contentText}</p>
                 </div>
                 

              </div>
              </div>  
        </>
    )
}

export default SampleContent
