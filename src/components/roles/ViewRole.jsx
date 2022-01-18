import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'

const ViewUser = () => {

  let history = useHistory();
  const {id} = useParams();

  
  
  const [role,setRole] = useState({
    roleid: id,
    rolename: "",
    status: "",
    


    
  })
  const {roleid, rolename, status} = role;



  useEffect(()=>{
    loadUsers();
}, [])



const loadUsers = async () => {

  //alert( id )
  await axios.get("http://corp-sqldb/MIS/api/MobileRoleapi").then((response)=>{
             debugger;
             
             
             //console.log((response.data).tbldata)
             JSON.parse(response.data).refcurtbl.filter((res)=>{
               if(res.roleid  == id){
                 console.log(res)
                 debugger;

                setRole({roleid : res.roleid,
                  rolename: res.rolename,
                  status: res.status,
               })

   
                 //setUser(JSON.parse(res))
            

               }
             })
          })
   // setUser(result.data.reverse())
                   
   // setUser(JSON.parse(result.data).tbldata)
    
}

    return (
        <>
        <div className="container-fluid">
        <Link to="/roleManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to Role List</Link>
          <h1>{role.roleid}</h1>  

          <div>
          <ul class="list-group">
  <li class="list-group-item"><span>Role:</span> {roleid}</li>
  <li class="list-group-item"><span>Role Name:</span> {rolename}</li>
  <li class="list-group-item"><span>Status:</span> {status}</li>
  
</ul>
</div>
          </div>
        </>
    )
}

export default ViewUser
