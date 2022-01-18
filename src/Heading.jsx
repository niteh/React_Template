import React from "react";


const Heading = (props) =>{
    return (
        <>
        <div className="container-fluid my-3">
       <div className="row">
           <div className="col-10 mx-auto text-center">
           <h2> {props.heading}</h2>
           </div>
       </div>
   </div>

        </>
    )
}

export default Heading;