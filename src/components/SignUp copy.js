import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const SignUp = () => {
    let history = useHistory();

    const [county, setCounty] = useState([]);
    const [district, setDistrict] = useState([]);
    const [clan, setClan] = useState([]);
    const [village, setVillage] = useState([]);
    
    
    const [param,setParam] = useState({
        AdminBoundaryIDs1: "",
        AdminBoundaryIDs2: "",
        AdminBoundaryIDs3: "",
        AdminBoundaryIDs4: "",
        ContactNo: "",
        Email: "",
        FirstName: "",
        HasRequestAccessToProgram: false,
        LastName: "",
        MiddleName: "fdfdf",
        Password: "",
        ProgramIDs: "",
        RoleId: 999999,
        UserName: ""
    })
    const[formErrors, setFormErrors]= useState({});
    const {UserName,RoleId,ProgramIDs,Password,MiddleName,LastName,HasRequestAccessToProgram,FirstName,Email,ContactNo,
        AdminBoundaryIDs4,AdminBoundaryIDs3,AdminBoundaryIDs2,AdminBoundaryIDs1} = param;
        

    const inputChange = e => {
      //  var countyid = document.getElementById("ddlcounty").value;
     //   alert(countyid)

        
       
        setParam( { ...param, [e.target.name]: e.target.value})
    }

    const validate = (values) =>{
        const errors = {};
        const regex = /^\S{1,}@\S{2,}\.\S{2,}$/i;
        var pattern = new RegExp(/^[0-9\b]+$/);

        if(!values.FirstName){
            errors.firstname = "First Name is required"
            
           
           
        }
        if(!values.LastName){
            errors.lastname = "Last Name is required"
           
        }
        if(!values.Email){
            errors.email = "Email is required"
           
        }else if(!regex.test(values.Email)){
            errors.email = "Must Be valid Email ID"
        }
      
        if(values.AdminBoundaryIDs1 == 0){
            errors.adminboundaryids1 = "Please select county"
        }
        if(values.AdminBoundaryIDs2 == 0){
            errors.adminboundaryids2 = "Please select district"
        }
        if(values.AdminBoundaryIDs3 == 0){
            errors.adminboundaryids3 = "Please select clan"
        }
        if(values.AdminBoundaryIDs4 == 0){
            errors.adminboundaryids4 = "Please select village"
        }

        if(!values.ContactNo){
            errors.contactno = "ContactNo is required"
        }else if(!pattern.test(values.ContactNo)){
            errors.contactno = "Must Be valid Phone no"
        }
        else if(values.ContactNo.length < 10){
            errors.contactno = "Must be ten digit"
        }
       
        return errors;
    }


    const onSubmit =  async (e) =>{
        e.preventDefault();
        
        setFormErrors(validate(param))
        
    
        await axios.post("http://corp-sqldb/mis/api/SignupApi", param).then((result)=>{
            debugger;
        alert("Hi")        
        if(result.statusText== "OK"){
            alert("User Created Successfully")
        };
        //console.log(user[0].ReturnValue);        
       // console.log( JSON.parse(result.data))
        })
        
       // history.push("/userManagement")

    }

    useEffect(()=>{
        loadCounty();
        loadDistrict();
        loadClan();
        loadVillage();
    }, [])
  
    const loadCounty = async () => {
         await axios.get("http://corp-sqldb/MIS//api/AdminBoundary1Api").then((result)=>{
        setCounty(JSON.parse(result.data).AdminBoundary1)
         })
       // setUser(result.data.reverse())
                     //   setUser(JSON.parse(result.data).tbldata)
        
    }
    const loadDistrict = async () => {
        await axios.get("http://corp-sqldb/MIS//api/AdminBoundary2Api").then((result)=>{

            
            setDistrict(JSON.parse(result.data).AdminBoundary2)
        })
      // setUser(result.data.reverse())
                    //   setUser(JSON.parse(result.data).tbldata)
       
   }

   const loadClan = async () => {
    await axios.get("http://corp-sqldb/MIS//api/AdminBoundary3Api").then((result)=>{

    
        setClan(JSON.parse(result.data).AdminBoundary3)
    })
  // setUser(result.data.reverse())
                //   setUser(JSON.parse(result.data).tbldata)
   
}

const loadVillage = async () => {
    await axios.get("http://corp-sqldb/MIS//api/AdminBoundary4Api").then((result)=>{
        setVillage(JSON.parse(result.data).AdminBoundary4)
    })
  // setUser(result.data.reverse())
                //   setUser(JSON.parse(result.data).tbldata)
   
}
    
   
    return (
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className='col-12'>
                    <div className='card p-3 my-3'>

                    <h3>Register User</h3>

<form onSubmit={e => onSubmit(e)}>
  <div className='row'>
 
  <div className="col-sm-4">
                
                
                <div className="form-group required mb-3">
      <label className="form-label">First Name</label>
      <input type="text" 
        className="form-control"  
        name="FirstName"
        placeholder="Enter your FirstName"
        value={FirstName} 
       
        onChange = { e => inputChange(e)} />
        <small id="emailHelp"
     className="form-text text-danger ">{formErrors.firstname}</small>
    </div>
    
    </div>

    <div className="col-sm-4">
                
                
    <div className=" mb-3">
      <label className="form-label">Middle Name</label>
      <input type="text" 
        className="form-control"  
        name="MiddleName"
        placeholder="Enter your MiddleName"
        value={MiddleName} 
       
        onChange = { e => inputChange(e)} />
        
    </div>
    
    </div>

    <div className="col-sm-4">
                
                
    <div className="form-group required mb-3">
      <label className="form-label">Last Name</label>
      <input type="text" 
        className="form-control"  
        name="LastName"
        placeholder="Enter your LastName"
        value={LastName} 
       
        onChange = { e => inputChange(e)} />
        <small id="emailHelp"
     className="form-text text-danger ">{formErrors.lastname}</small>
    </div>
    
    </div>


    <div className="col-sm-4">
                
                
    <div className="form-group required mb-3">
      <label className="form-label">Email ID</label>
      <input type="text" 
        className="form-control"  
        name="Email"
        placeholder="Enter your Email"
        value={Email} 
       
        onChange = { e => inputChange(e)} />
        <small id="emailHelp"
     className="form-text text-danger ">{formErrors.email}</small>
    </div>
    
    </div>

    <div className="col-sm-4">
                
                
    <div className="form-group required mb-3">
      <label className="form-label">Contact No</label>
      <input type="phone" 
        className="form-control"  
        name="ContactNo"
        placeholder="Enter your ContactNo"
        value={ContactNo} 
       
        onChange = { e => inputChange(e)} />
        <small id="emailHelp"
     className="form-text text-danger ">{formErrors.contactno}</small>
    </div>
    
    </div>

    <div className="col-sm-4">
                
                
                <div className="form-group required mb-3">
      <label className="form-label">County</label>
     <select  className = "form-select" id="ddlcounty" name = "AdminBoundaryIDs1" value={AdminBoundaryIDs1}  onChange={ e => inputChange(e)} >
         <option value="0">Select County</option>
        {
          county.map((curElem)=>(
            <option value={curElem.adminboundary1id}>{curElem.name}</option>
            ))
        }
     
      </select> 
     
      <small id="emailHelp"
     className="form-text text-danger ">{formErrors.adminboundaryids1}</small>
     
     
    </div>
    </div>
    <div className="col-sm-4">
                
                
                <div className="form-group required mb-3">
      <label className="form-label">District</label>
     <select  className = "form-select" name = "AdminBoundaryIDs2" value={AdminBoundaryIDs2}  onChange={ e => inputChange(e)} >
         <option value="0">Select District</option>
        {
          district.map((curElem)=>(
            <option value={curElem.adminboundary2id}>{curElem.name}</option>
            ))
        }
     
      </select> 
      <small id="emailHelp"
     className="form-text text-danger ">{formErrors.adminboundaryids2}</small>
     

     
     
    </div>
    </div>

    <div className="col-sm-4">
                
                
                <div className="form-group required mb-3">
      <label className="form-label">Clan</label>
     <select  className = "form-select" name = "AdminBoundaryIDs3" value={AdminBoundaryIDs3}  onChange={ e => inputChange(e)} >
         <option value="0">Select Clan</option>
        {
          clan.map((curElem)=>(
            <option value={curElem.adminboundary3id}>{curElem.name}</option>
            ))
        }
     
      </select> 
      <small id="emailHelp"
     className="form-text text-danger ">{formErrors.adminboundaryids3}</small>

     
     
    </div>
    </div>

    <div className="col-sm-4">
                
                
                <div className="form-group required mb-3">
      <label className="form-label">Village</label>
     <select  className = "form-select" name = "AdminBoundaryIDs4" value={AdminBoundaryIDs4}  onChange={ e => inputChange(e)} >
         <option value="0">Select Village</option>
        {
          clan.map((curElem)=>(
            <option value={curElem.adminboundary4id}>{curElem.name}</option>
            ))
        }
     
      </select> 
      <small id="emailHelp"
     className="form-text text-danger ">{formErrors.adminboundaryids4}</small>
     

     
     
    </div>
    </div>


    </div>


<div>
    
<button className="btn btn-primary mb-3"> Sign Up</button>
</div>

</form>
                    </div>
                    
                </div>
            </div>
        {/* <Link to="/userManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to User List</Link> */}
            

            </div>
        </>
    )
}

export default SignUp
