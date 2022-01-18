import React, {  useState, useEffect } from "react";
import axios from "axios";
import Heading from "../Heading";

const CovidTable = () =>{

const [posts, setPosts] = useState([]);

   useEffect(()=>{
     
    axios.get('http://10.2.151.40/mis/api/BSPAPI')
     .then( res => { 
      
     debugger;
      setPosts(JSON.parse(res.data).tbldata)})
   
    

   })
   

  // useEffect(()=>{
     
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then( res => { 
      
     
  //     setPosts(res.data)})
   
    

  // })

    return (
    <>
    <Heading heading="Data from API" />
    <div className="container my-4">
       <div className="row">
           <div className="col-10 mx-auto"></div>
           <div className="table-responsive">
               <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Service Provider Type</th>
                        <th>Service Provider Name</th>
                        
                        <th>Address</th>
                       
                       
                    </tr>
                </thead>

          
              <tbody>
       
                    {
                        posts.map((curElem,index)=>{
                            return(
                          <tr key={index}>
                            <td>{curElem.serviceprovidertypeid}</td>
                            <td>{curElem["Service Provider Name"]}</td>
                            <td>{curElem["Service Provider Type"]}</td>
                            <td>{curElem["Account Information"]}</td>
                           

                          </tr>
                          )

                        })
                    }
                 </tbody>
             
               </table>
           </div>

           </div>
           </div>
           

    </>
    )
}

export default CovidTable;