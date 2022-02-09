import React,{useState, useEffect} from 'react'
import { NavLink, useHistory, Link } from 'react-router-dom';
import axios from 'axios';



const ForgotPassword = () => {
let history = useHistory();

//const [result1, setResult1] = useState(null);
   

//     const getUser =()=>{ result1.map((curElem)=>  curElem)
// }
   
     
//     {!result1 ? alert("no") : alert({getUser})}
    
    const [param, setParam] = useState({
        UserID: ""
    })
    const[formErrors, setFormErrors]= useState({});
   
    
    const {UserID} = param;
    const inputChange = e => {
        
        setParam({...param,[e.target.name]: e.target.value})
     }

 

    
    


     const validate = (values) =>{
        const errors = {};
        // const regex = /^\S{1,}@\S{2,}\.\S{2,}$/i;
        // var pattern = new RegExp(/^[0-9\b]+$/);
        // let formIsValid = true;
         
      
        if(!values.UserID ){
            
            
            errors.userID = "User ID is required"
            //formIsValid = false;
            
           
            
           
           
        }
      
     
       
        return errors;
    }
        

    const submitPassword = async (e) => {

        e.preventDefault();
       
        
        
        if(Object.keys(validate(param)).length === 0){
            await axios.post("http://corp-sqldb/mis/ForgotPassword/GetForgotPassword", param).then((result)=>{
                //result = JSON.parse(result);
               // let user = JSON.parse(result)
              
               debugger;
               let user = JSON.parse(result.data);
              console.log(user[0].ReturnValue);
              if(user[0].ReturnValue === "Username/Password is Incorrect."){
                // alert(user[0].ReturnValue)
                 setFormErrors({username:  "Username is incorrect", password:"Password is incorrect"})
              }else{
                 localStorage.setItem("user-info", JSON.stringify(result.data))
                
                 history.push("/dashboard")
              }
              // console.log(JSON.parse(result.data));
                //console.log(JSON.parse(result.data).tbldata)
             }).catch(err => {
                 console.log(err)
             })

        }
            
            
        
        else{
            setFormErrors(validate(param))
            return;
        }
        


}


   


    return (
        <>
        <div className='bg-secondary bg-gradient py-3'>

<div className="col-md-4  offset-md-4 my-4 login-form-1">
                    
                    <div className='container'>
        

            
        <h3>Forgot Password </h3>
        

 

<div className="mb-4">
<div className="form-group required mb-3">
      <label className="form-label">User ID</label>

      <div className="input-group ">
  <span className="input-group-text" id="basic-addon1"><i className='fa fa-user'></i></span>
  <input type="text" 
        className="form-control"  
        name="UserID"
        placeholder="Enter User ID"
        value={UserID} 
       
        onChange = { e => inputChange(e)} />
</div>
     
        <small id="emailHelp"
     className="form-text text-danger ">{formErrors.userID}</small>
    </div>

     

</div>

<div className=''>
<div className="mb-2">
 
<button className=' btnSubmit' onClick={submitPassword}>Submit</button>

<Link  className="nav-link text-center" to="/Login">Back to Login</Link>
</div>
</div>
</div>


        </div>
                </div>
               
      
        </>
    )
}

export default ForgotPassword
