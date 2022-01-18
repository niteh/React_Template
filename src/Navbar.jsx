import React, { useState } from "react";
import { NavLink, useHistory,Link } from "react-router-dom";


const Navbar = () =>{
const [userName, setUserName]= useState("")
  let history = useHistory();
//   if(localStorage.getItem("user-info")){
//    alert("HI")
//     let userData1 = JSON.parse(localStorage.getItem("user-info"));
//     let userData = JSON.parse(userData1);
//     let user = userData[0].username;
//     setUserName(user)
// }
  
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  }
  
 


 
    
  return (
      
    <>


   <div className="container-fluid p-0">
       <div className="">
           <div className="" style={{minHeight: 55 + "px"}}>

           <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
  <NavLink className="navbar-brand" to="/">React Template</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
         <NavLink activeClassName ="menu-active" className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
      

        <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/dashboard">Dashoboard</NavLink>
        </li>
    <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/mapviewer">Map Viewer</NavLink>
  </li>
  <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/userManagement">User Management</NavLink>
        </li>

        <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/roleManagement">Role Management</NavLink>
        </li>
      </ul>
      <form class="d-flex">
         <ul className="navbar-nav ">
      <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/Login">Login</NavLink>
        </li>

        <li className="nav-item">
         <NavLink  activeClassName ="menu-active"    className="nav-link" to="/SignUp">Sign up</NavLink>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="fa fa-user-circle"> </i>
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">username</a></li>
            <li><a class="dropdown-item" href="#" onClick={logout}>Logout</a></li>
            
          </ul>
        </li>
      </ul>
      </form>
    </div>
  </div>
</nav>

  
</div>
       </div>
   </div>

    </>

  )
}

export default Navbar;