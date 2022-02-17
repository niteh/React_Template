import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const EditRole = () => {
  let history = useHistory();
  const {id} = useParams();
  const [role,setRole] = useState({
       RoleName: ""
  })
  const {RoleName} = role;

  const inputChange = e => {
     setRole( { ...role, [e.target.name]: e.target.value})
  }
  const onSubmit =  async (e) =>{
      e.preventDefault();
      
  
      // await axios.post("http://10.2.151.40/mis/api/BSPAPI", param)
       debugger;
       console.log(role)

     var axios = require('axios');
     var qs = require('qs');
     var data = qs.stringify({
  'RoleName': role.RoleName,
  'RoleId': role.RoleId,
  ModifiedBy: "71",
   'action': 'put' 
 });
 var config = {
   method: 'put',
   url: 'http://corp-sqldb/MIS//api/RoleApi',

   


   headers: { 
     'Content-Type': 'application/x-www-form-urlencoded'
   },
   data : data
 };

 axios(config)
 .then(function (response) {
  debugger;
   console.log(JSON.stringify(response.data));
 }) .catch(function (error) {
  console.log(error);
 });
  
      
      loadRoles();
      history.push("/roleManagement")

  }


  useEffect(()=>{
     
    loadRoles();
}, [])

const loadRoles = async () => {

  //alert( id )
     await axios.get("http://corp-sqldb/MIS/api/MobileRoleapi").then(response => {
      
             debugger;
             console.log(JSON.parse(response.data).refcurtbl.roleid)
             
             //console.log((response.data).tbldata)
             JSON.parse(response.data).refcurtbl.filter((res)=>{

              console.log(res)

               if(res.roleid  == id){
                 console.log(res)
                 debugger;

                setRole({
                  RoleId : res.roleid,
                  action: 'put',
                  RoleName:res.rolename,
                  ModifiedBy: "71"
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
        <Link to="/roleManagement" className="btn btn-primary mb-2 mt-2 float-end"> Back to Role List </Link>
                <h1>Edit Role</h1>

          <hr />
 

            <form onSubmit={e => onSubmit(e)}>
              <div className="row">
                <div className="col-sm-4">
                
                
            <div className="mb-3">
  <label className="form-label">Role</label>
  <input type="text" 
    className="form-control"  
    name="RoleName"
    placeholder="Update Role Name"
    value={RoleName} 
    onChange = { e => inputChange(e)} />
</div>
</div>



</div>

<div>
    <button className="btn btn-primary mb-3"> Update role</button>
</div>

            </form>

            </div>
        </>
    )
}

export default EditRole
