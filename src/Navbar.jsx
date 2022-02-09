import React, { useState, useEffect } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";


const Navbar = () => {
  let history = useHistory();
  // const [userName, setUserName]= useState("user")
  //   let history = useHistory();
  // var user123 = "";
  //   if(localStorage.getItem("user-info") === null){
  //    setUserName("not login")
  //     console.log(JSON.parse(localStorage.getItem("user-info")))
  // }else{
  //   let userData1 = JSON.parse(localStorage.getItem("user-info"));
  //   let userData = JSON.parse(userData1);
  //   let user = userData[0].username;
  //  // setUserName(user)
  //   //alert(user)
  //   user123 = user;
  //   alert(user123)
  // }
  // useEffect(()=>{

  //   console.log("Hello")
  // },[])

  //   if(localStorage.getItem("user-info")){
  //   var userData1
  //   var userData 
  //   try{
  //     userData1 = JSON.parse(localStorage.getItem("user-info"));
  //     userData = JSON.parse(userData1);
  //   }

  //   catch{
  //     userData[0].firstname = "user"
  //   }
  // }
  // setUserName(userData[0].firstname)


  //alert("HI")
  //  let userData1 = JSON.parse(localStorage.getItem("user-info"));
  //  let userData = JSON.parse(userData1);
  //   let user = userData[0].username;

  //  setUserName(user)
  //  console.log({userName})

  //alert(user)

  //alert(user)
 

  const logout = () => {
    localStorage.removeItem("user-info")
    localStorage.clear();
  
    history.push("/login");
    
    
  }






  return (

    <>


      <div className="container-fluid p-0">
        <div className="">
          <div className="" style={{ minHeight: 55 + "px" }}>

            <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Template</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>


                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link" to="/dashboard">Dashoboard</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link" to="/mapviewer">Map Viewer</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link" to="/userManagement">User Management</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink activeClassName="menu-active" className="nav-link" to="/roleManagement">Role Management</NavLink>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <ul className="navbar-nav ">
                      <li className="nav-item">
                        <NavLink activeClassName="menu-active" className="nav-link" to="/Login">Login</NavLink>
                      </li>

                      <li className="nav-item">
                        <NavLink activeClassName="menu-active" className="nav-link" to="/SignUp">Sign up</NavLink>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-user-circle"> </i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                          {/* <li><a className="dropdown-item" href="#">{user123}</a></li> */}
                          <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>

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