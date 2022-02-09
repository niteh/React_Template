import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'


const SignUp = () => {
    let history = useHistory();
    const [GDATA, setGDATA] = useState([]);
    const [county, setCounty] = useState([]);
    const [district, setDistrict] = useState([]);
    const [clan, setClan] = useState([]);

    const [village, setVillage] = useState([]);
  
    const[formErrors, setFormErrors]= useState({});
    //const[isSubmit, setIsSubmit]= useState(true);
    
    
    
    
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
        MiddleName: "",
        Password: "",
        ProgramIDs: "",
        RoleId: 999999,
        UserName: ""
    })
    
    const {UserName,RoleId,ProgramIDs,Password,MiddleName,LastName,HasRequestAccessToProgram,FirstName,Email,ContactNo,
        AdminBoundaryIDs4,AdminBoundaryIDs3,AdminBoundaryIDs2,AdminBoundaryIDs1} = param;
        


       


    const inputChange = e => {

        let districtdata = JSON.parse(GDATA).District;
        let countyid = document.getElementById("ddlcounty").value;
           
            const filteredArray = districtdata.filter( (itm) => {
                return countyid.indexOf(itm.adminboundary1id) > -1;
            });
            setDistrict(filteredArray)
            let clandata = JSON.parse(GDATA).Clan;
            let districtid = document.getElementById("ddldistrict").value;
            const filteredArrayClan = clandata.filter((item)=>{
                return districtid.indexOf(item.adminboundary2id) > -1
            })
            setClan(filteredArrayClan)
           
            let villagedata = JSON.parse(GDATA).Village;
            let clanid = document.getElementById("ddlclan").value;
            const filteredArrayVillage = villagedata.filter((item)=>{
                return clanid.indexOf(item.adminboundary3id) > -1
            })
            setVillage(filteredArrayVillage)

         
      

          
    

        
       
        setParam( { ...param, [e.target.name]: e.target.value})
    }

    const validate = (values) =>{
        const errors = {};
        const regex = /^\S{1,}@\S{2,}\.\S{2,}$/i;
        var pattern = new RegExp(/^[0-9\b]+$/);
        // let formIsValid = true;
         
        if(!values.FirstName ){
            
            
            errors.firstname = "First Name is required"
            //formIsValid = false;
            
           
            
           
           
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
        else if(values.ContactNo.length > 10){
            
            errors.contactno = "Required 10 digits"
        }
       
        return errors;
    }


    const onSubmit =  async (e) =>{
        e.preventDefault();

        if(Object.keys(validate(param)).length === 0){
            await axios.post("http://corp-sqldb/mis/api/SignupApi", param).then((result)=>{
             
                console.log(result.data)
                  
                  if(result.data== "Email already exists. <br/>Kindly enter different email."){
                    //  console.log(result.data)
                      setFormErrors({email:  "Email already exists."})
                      
                  }
      
                  else if(result.data== "Contact No already exists. <br/>Kindly enter different Contact No."){
                     // console.log(result.data)
                      setFormErrors({contactno:  "Contact No already exists."})
                      
                  } else if (result.data = "User created successfully"){
                     //  console.log(result.data)
                      setFormErrors({})
                      alert("User Created Successfully")
                  };
                //  console.log(user[0].ReturnValue);        
                // console.log( JSON.parse(result.data))
                  })

        }
        else{
            setFormErrors(validate(param))
            return;
        }
        
        
   
     
    
      
        
     //  history.push("/userManagement")

    }

    useEffect(()=>{
        loadCounty();
        
    }, [formErrors])
  
    const loadCounty = async () => {
         await axios.get("http://corp-sqldb/MIS//api/SubmitGrievanceApi/25").then((result)=>{

            setGDATA(result.data)
           
        setCounty(JSON.parse(result.data).County)
         })
       // setUser(result.data.reverse())
                     //   setUser(JSON.parse(result.data).tbldata)
        
    }
  
    
   
    return (
        <> 
        <div className='bg-secondary bg-gradient py-3'>        <div className="container-fluid">
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

      <div className="input-group ">
  <span className="input-group-text" id="basic-addon1"><i className='fa fa-envelope'></i></span>
  <input type="text" 
        className="form-control"  
        name="Email"
        placeholder="Enter your Email"
        value={Email} 
       
        onChange = { e => inputChange(e)} />
</div>
     
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
     <select  className = "form-select" id="ddldistrict" name = "AdminBoundaryIDs2" value={AdminBoundaryIDs2}  onChange={ e => inputChange(e)} >
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
     <select  className = "form-select" id="ddlclan" name = "AdminBoundaryIDs3" value={AdminBoundaryIDs3}  onChange={ e => inputChange(e)} >
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
     <select  className = "form-select" id="ddlvillage" name = "AdminBoundaryIDs4" value={AdminBoundaryIDs4}  onChange={ e => inputChange(e)} >
         <option value="0">Select Village</option>
        {
          village.map((curElem)=>(
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
    <hr />
    <span> </span>
<button className="btn  btn-success mb-3 float-end"> Register </button>
</div>

</form>
                    </div>
                    
                </div>
            </div>
        {/* <Link to="/userManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to User List</Link> */}
            

            </div>
            </div>


        </>
    )
}

export default SignUp
