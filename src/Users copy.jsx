import React, {useState, useEffect} from 'react'
import {  Link } from "react-router-dom";
import axios from "axios"

const Users = () => {

    

    const [users, setUser] = useState([]);
 
    const deleteUser = async id =>{
        var users = {
            benefitsserviceprovidersid: id,
            action: 'delete',
            serviceprovidertypeid: 0,
            serviceprovidertypenameid: 0,
            accountinformation: '',
            address: '',
            contactperson: '',
            contactno: 0,
            email: ''
        };
debugger;
        await axios.post("http://10.2.151.40/mis/api/BSPAPI", users)
        
    //     alert(id);
    //     const headers = {

    //         "Content-Type": "application/json",
            
    //     } 
    //    await axios.delete(`http://10.2.151.40/mis/api/BSPAPI/tbldata/${id}`,{ headers: headers })
    //    console.log(`http://10.2.151.40/mis/api/BSPAPI/${id}`)
      
        loadUsers();
    }
    

    useEffect(()=>{
        loadUsers();
    }, [])

    const loadUsers = async () => {
         await axios.get("http://10.2.151.40/mis/api/BSPAPI").then((result)=>{
            setUser(JSON.parse(result.data).tbldata)
         })
       // setUser(result.data.reverse())
                     //   setUser(JSON.parse(result.data).tbldata)
        
    }
    const loadRoles = async () => {
        await axios.get("http://corp-sqldb/MIS/api/MobileRoleapi").then((result)=>{
           setRole(JSON.parse(result.data).refcurtbl)
        })

  

    
    return (
        <>
        <div className="container-fluid">

            <Link to="/users/Add" className="btn btn-primary mb-2 mt-2 float-end"> Add user </Link>
             <h1>Manage User</h1>
          <table class="table table-striped  border shadow">
  <thead className="table-light">
    <tr>
        {/* <th>#</th> */}
        <th>Email</th>
        <th>Service Provider Type</th>
        <th>Account Information</th>
        <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          users.map((curElem,index)=>(
             
                   <tr key={index}>
                            {/* <td>{curElem.serviceprovidertypeid}</td> */}
                            <td>{curElem.Email}</td>
                            <td>{curElem["Service Provider Type"]}</td>
                            <td>{curElem["Account Information"]}</td>
                           

                  <td>
                  <Link className="btn btn-sm btn-primary mx-1" to={`/viewUsers/${curElem.benefitsserviceprovidersid}`} ><i class="far fa-eye"></i> </Link>
                  <Link className="btn  btn-sm btn-dark mx-1" to={`/users/Edit/${curElem.benefitsserviceprovidersid}` } ><i class="far fa-edit"></i> </Link>
                  <Link className="btn  btn-sm btn-danger mx-1" to="/userManagement" onClick={() => deleteUser(curElem.benefitsserviceprovidersid)}><i class="far fa-trash"></i> </Link>
                  </td>

                  </tr>
          ))
      }
    
  </tbody>
</table>  
</div>
        </>
    )
}

export default Users
