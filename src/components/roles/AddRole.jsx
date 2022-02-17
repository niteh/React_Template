import React, {useState} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const AddRole = () => {
    let history = useHistory();
    
    const [role,setRole] = useState({ RoleName: "" })
    const[formErrors, setFormErrors]= useState({});
    const  {RoleName } = role;

    const inputChange = e => {
       setRole( { ...role, [e.target.name]: e.target.value})
    }
    const validate = (values) =>{
      const errors = {};
      // const regex = /^\S{1,}@\S{2,}\.\S{2,}$/i;
      // var pattern = new RegExp(/^[0-9\b]+$/);
      // let formIsValid = true;
       
    
      if(!values.RoleName ){
 
          errors.roleName = "RoleName is required"
          //formIsValid = false;

         
      }
      return errors;
  }


    const onSubmit =  async (e) =>{
        e.preventDefault();
        debugger;

        if(Object.keys(validate(role)).length === 0){
          await axios.post("http://corp-sqldb/MIS//api/RoleApi", role).then(result => {
              //result = JSON.parse(result);
             // let user = JSON.parse(result)

             console.log(result.data)
            if(result.data !== "Role already exists"){
              setFormErrors({})
               // alert("Passowod sent on your registered mail id")
                history.push("/roleManagement")
            }else{
              setFormErrors({roleName:  "Role name is already exist "})
            }
             debugger;
          
            // console.log(JSON.parse(result.data));
              //console.log(JSON.parse(result.data).tbldata)
           }).catch(err => {
               console.log(err)
           })

      }
    
      else{
        setFormErrors(validate(role))
        return;
    }
        
      

    }
    return (
        <>
        <div className="container-fluid">
        <Link to="/roleManagement" className="btn btn-primary mb-2 mt-2 float-end"> Back to Role List</Link>
            <h1>Add Role</h1>
            <hr />

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
    <small id="emailHelp"
     className="form-text text-danger ">{formErrors.roleName}</small>
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
