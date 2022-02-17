import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'

const ViewUser = () => {

  let history = useHistory();
  const {id} = useParams();

  const getLocalRole = () =>{
    let roleList = localStorage.getItem('allRoles');
    let roleListArray = JSON.parse(localStorage.getItem('allRoles'));
    //console.log(roleListArray)
    
  
    let singleRole = roleListArray.filter((role)=>{
      return role.roleid == id;
    })
  
    // console.log(userListArray)
  
    
     //console.log(userList)
    if(roleList){
        return singleRole
        // console.log()
    }else{
        return [];
    }
  } 

  
  
  const [role,setRole] = useState(getLocalRole())
 // console.log(role)


 

    return (
        <>
        <div className="container-fluid">
        <Link to="/roleManagement" className="btn btn-primary mb-2 mt-2 float-end"> Back to Role List</Link>
          <h1>{role[0].rolename}</h1>  

          <div>
          <ul class="list-group mb-3">
  <li class="list-group-item"><span>Role:</span> {role[0].roleid}</li>
  <li class="list-group-item"><span>Role Name:</span> {role[0].rolename}</li>
  <li class="list-group-item"><span>Status:</span> {role[0].status}</li>
  
</ul>
</div>
          </div>
        </>
    )
}

export default ViewUser
