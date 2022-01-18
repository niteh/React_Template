import React, {useState} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const AddRole = () => {
    let history = useHistory();
    
    const [role,setRole] = useState({
      
      RoleName: ""
      
  
  
      
    })
    const  {RoleName } = role;

    const inputChange = e => {
       setRole( { ...role, [e.target.name]: e.target.value})
    }
    const onSubmit =  async (e) =>{
        e.preventDefault();
        debugger;
    
        await axios.post("http://corp-sqldb/MIS//api/RoleApi", role).then(response => {
          debugger;
      }).catch((err) => {
          debugger;
         
      });
        
        history.push("/roleManagement")

    }
    return (
        <>
        <div className="container-fluid">
        <Link to="/roleManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to Role List</Link>
            <h1>Add Role</h1>

            <form onSubmit={e => onSubmit(e)}>
              <div className="row">
                {/* <div className="col-sm-4">
                
                
            <div className="mb-3">
  <label className="form-label">Role Id</label>
  <input type="text" 
    className="form-control"  
    name="CreatedBy"
    placeholder="Enter Created By"
    value={CreatedBy} 
    onChange = { e => inputChange(e)} />
</div>
</div> */}

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Role Name</label>
  <input type="text" 
    className="form-control"  
    name="RoleName"
    placeholder="Enter your Role Name" 
    value={RoleName}
    onChange = { e => inputChange(e)}/>
</div>
</div>

{/* <div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Description</label>
  <input type="text" 
    className="form-control"  
    name="Description"
    placeholder="Enter your Description" 
    value={Description}
    onChange = { e => inputChange(e)}/>
</div>
</div> */}


</div>

<div>
    <button className="btn btn-primary mb-3"> Add Role</button>
</div>

            </form>

            </div>
        </>
    )
}

export default AddRole
