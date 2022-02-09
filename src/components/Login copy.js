import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
let history = useHistory();

//const [result1, setResult1] = useState(null);
   

//     const getUser =()=>{ result1.map((curElem)=>  curElem)
// }
   
     
//     {!result1 ? alert("no") : alert({getUser})}
    
    const [param, setParam] = useState({
        username: "",
        password: ""
    })
    const[formErrors, setFormErrors]= useState({});
   
    
    const {username,password} = param;
    const inputChange = e => {
        
        setParam({...param,[e.target.name]: e.target.value})
     }

 

    
     useEffect(() => {
     
        if (localStorage.getItem('user-info')) {
            
           
        }

    },[formErrors])


      const validate = (values) =>{
        const errors = {};
        //const regex = /^\S{1,}@\S{2,}\.\S{2,}$/i;

        if(!values.username){
            errors.username = "Username is required"
           
        }
      
        if(!values.password){
            errors.password = "Password is required"
        }
        return errors;
    }
        

    const login = async (e) => {

        e.preventDefault();
       
        
        //setFormErrors(validate(param))
        //  console.log(setFormErrors(validate(param)));
        // console.log(validate(param))
        
        // alert("HI")
        //console.log("Hi")
        //console.log(formErrors)
        if(Object.keys(formErrors).length === 0 ){
            setFormErrors(validate(param))
            return;
        }
        
        else{
            await axios.post("http://corp-sqldb/mis/api/MLogin/Login", param).then((result)=>{
                //result = JSON.parse(result);
               // let user = JSON.parse(result)
              
               
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

       
      
      // setUser(result.data.reverse())
                    //   setUser(JSON.parse(result.data).tbldata)
       
   }
 
   if(localStorage.getItem("user-info")){
    //alert("HI")
     let userData1 = JSON.parse(localStorage.getItem("user-info"));
     let userData = JSON.parse(userData1);
     let user = userData[0].username;
    // setUserName(user)
    //alert(user)
 }


    //  async function login(e){
    //      e.preventDefault();

    //      setFormErrors(validate(param))
         
    //     // alert("hi")
    //     //debugger;
    //    //console.log(param.username)
    // //    if(param.username === ""){
    // //        alert("Enter username");
    // //        return;

    // //    }
    // //    else if(param.password === ""){
    // //     alert("Enter Password");
    // //     return;

    // // }
    


       
    //     let result = await fetch("http://10.2.151.40/mis/api/MLogin/Login", {
    //      method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(param)
        
    //     });
        
    //     debugger;
    //     result = await result.json();
    //     //let user = JSON.parse(result)
    //     //console.log(user[0].username);
        
        
    //    // setResult1(result)
     
       
    //    localStorage.setItem("user-info", JSON.stringify(result))
    //    let user = JSON.parse(result)
       
    //     if(user[0].username){
    //         alert("Hello")
    //    history.push("/dashboard")}
    //     else{
    //         setFormErrors(validate(param))
    //     }
    
    //   // let user1 = JSON.parse(localStorage.getItem("user-info"))
      
    //  }


   


    return (
        <>
        <div className='bg-secondary bg-gradient py-3'>

<div className="col-md-4  offset-md-4 my-4 login-form-1">
                    
                    <div className='container'>
        

            
        <h3>Login </h3>
        

        <div className="">
            <div className="">
            
            
        <div className="mb-3">
<label className="form-label">Username</label>

<div className="input-group ">
                                    <span className="input-group-text bg-black"><i className="fa fa-user text-white"></i></span>
                                    <input type="text" 
className="form-control"  
name="username"
placeholder="Enter your username"
required
value={username} 
onChange = { e => inputChange(e)} />
                                </div>

<small id="emailHelp"
 className="form-text text-danger ">{formErrors.username}</small>
</div>

</div>

<div className="">
            
<div className="mb-4">
<label className="form-label">Password</label>

<div className="input-group ">
                                    <span className="input-group-text bg-black"><i className="fa fa-key text-white"></i></span>
                                    <input type="password" 
    className="form-control"  
    name="password"
    placeholder="Enter your password"
    value={password} 
    required
    onChange = { e => inputChange(e)} />
                                </div>

<small id="emailHelp"
 className="form-text text-danger ">{formErrors.password}</small>
</div>
     

</div>

<div className=''>
<div className="mb-2">
 
<button className=' btnSubmit' onClick={login}>login</button>
</div>
</div>
</div>


        </div>
                </div>
                </div>
      
        </>
    )
}

export default Login
