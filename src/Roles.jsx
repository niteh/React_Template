import React, {useState, useEffect} from 'react'
import {  Link } from "react-router-dom";
import axios from "axios"

const Roles = () => {

    

    const [role, setRole] = useState([]);
   
 
    const deleteRole = async id =>{
        // alert(id)
        // var param = {
        //     roleid: id,
        //     action: 'delete',
           
        // };
  //alert(`http://corp-sqldb/MIS//api/RoleApi/${id}|${"71"}`)
  let text = "Are you sure?";
  if (window.confirm(text) == true) {
  
        await axios.delete(`http://corp-sqldb/MIS//api/RoleApi/${id}|${"71"}` )
  }


        
    //     alert(id);
    //     const headers = {

    //         "Content-Type": "application/json",
            
    //     } 
    //    await axios.delete(`http://10.2.151.40/mis/api/BSPAPI/tbldata/${id}`,{ headers: headers })
    //    console.log(`http://10.2.151.40/mis/api/BSPAPI/${id}`)
      
        loadRoles();
    }
    

    useEffect(()=>{
        loadRoles();
    }, [])

    const loadRoles = async () => {
         await axios.get("http://corp-sqldb/MIS/api/MobileRoleapi").then((result)=>{
            setRole(JSON.parse(result.data).refcurtbl)
         })
       // setUser(result.data.reverse())
                     //   setUser(JSON.parse(result.data).tbldata)
        
    }

    
    return (
        <>
        <div className="container-fluid">
            

            <Link to="/roles/AddRole" className="btn btn-primary mb-2 mt-2 float-end"> Add role </Link>
             <h1>Manage Role</h1>
          <table class="table table-striped border shadow">
  <thead className="table-light">
    <tr>
        <th>#</th>
        <th>Role ID</th>
        <th>Role Name</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          role.map((curElem,index)=>(
             
                   <tr key={index}>
                            <td>{curElem.sl}</td>
                            <td>{curElem.roleid}</td>
                            <td>{curElem.rolename}</td>
                            <td>{curElem.status}</td>
                           
                           

                  <td>
                  <Link className="btn btn-sm btn-primary mx-1" to={`/viewRole/${curElem.roleid}`} ><i class="far fa-eye"></i> </Link>
                  { curElem.status == "Active" ? <Link className="btn  btn-sm btn-dark mx-1" to={`/roles/Edit/${curElem.roleid}` } ><i class="far fa-edit"></i></Link>: ""} 
                  <Link className="btn  btn-sm btn-danger mx-1" to="/roleManagement" onClick={() => deleteRole(curElem.roleid)}>{ curElem.status == "In-Active" ? <i class="far fa-toggle-off"></i>: <i class="far fa-toggle-on"></i>} </Link>
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

export default Roles
