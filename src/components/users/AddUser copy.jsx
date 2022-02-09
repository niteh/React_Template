import React, {useState} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const AddUser = () => {
    let history = useHistory();
    
    const [param,setUser] = useState({
      accountinformation: '',
      action: 'insert',
      address: '',
      benefitsserviceprovidersid: "",
      contactno: '',
      email: '',
      serviceprovidertypeid: '',
      serviceprovidertypenameid: ''
    })
    const {accountinformation,action,address,benefitsserviceprovidersid,contactno,email,serviceprovidertypeid,serviceprovidertypenameid} = param;

    const inputChange = e => {
       setUser( { ...param, [e.target.name]: e.target.value})
    }
    const onSubmit =  async (e) =>{
        e.preventDefault();
        
    
        await axios.post("http://10.2.151.40/mis/api/BSPAPI", param)
        
        history.push("/userManagement")

    }
    return (
        <>
        <div className="container-fluid">
        <Link to="/userManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to User List</Link>
            <h1>Add User</h1>

            <form onSubmit={e => onSubmit(e)}>
              <div className="row">

                
                <div className="col-sm-4">
                
                
            <div className="mb-3">
  <label className="form-label">Account Information</label>
  <input type="text" 
    className="form-control"  
    name="accountinformation"
    placeholder="Enter your account information"
    value={accountinformation} 
    onChange = { e => inputChange(e)} />
</div>
</div>

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Address</label>
  <input type="text" 
    className="form-control"  
    name="address"
    placeholder="Enter your address" 
    value={address}
    onChange = { e => inputChange(e)}/>
</div>
</div>
<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Benefits Serviceproviders Id</label>
  <input type="text" 
    className="form-control"  
    name="benefitsserviceprovidersid"
    placeholder="Enter your Benefits Serviceproviders Id" 
    value={benefitsserviceprovidersid}
    onChange = { e => inputChange(e)}/>
</div>
</div>

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Contact No</label>
  <input type="text" 
    className="form-control"  
    name="contactno"
    placeholder="Enter your Contact No" 
    value={contactno}
    onChange = { e => inputChange(e)}/>
</div>
</div>

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Email</label>
  <input type="text" 
    className="form-control"  
    name="email"
    placeholder="Enter your  Email" 
    value={email}
    onChange = { e => inputChange(e)}/>
</div>
</div>

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Service Provider Type Id</label>
  <input type="text" 
    className="form-control"  
    name="serviceprovidertypeid"
    placeholder="Enter your  Service Provider Type Id" 
    value={serviceprovidertypeid}
    onChange = { e => inputChange(e)}/>
</div>
</div>

<div className="col-sm-4">
<div className="mb-3">
  <label className="form-label">Service Provider Type Name Id</label>
  <input type="text" 
    className="form-control"  
    name="serviceprovidertypenameid"
    placeholder="Enter your Service Provider Type Name Id" 
    value={serviceprovidertypenameid}
    onChange = { e => inputChange(e)}/>
</div>
</div>

</div>

<div>
    <button className="btn btn-primary mb-3"> Add user</button>
</div>

            </form>

            </div>
        </>
    )
}

export default AddUser
