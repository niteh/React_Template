import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'




const ViewUser = () => {

  let history = useHistory();
  const {id} = useParams();

  const getLocalUser = () =>{
    let userList = localStorage.getItem('allUsers');
    let userListArray = JSON.parse(localStorage.getItem('allUsers'));
    
  
    let singleUser = userListArray.filter((user)=>{
      return user.userid == id;
    })
  
    // console.log(userListArray)
  
    
     //console.log(userList)
    if(userList){
        return singleUser
        // console.log()
    }else{
        return [];
    }
  } 

  
  
  const [param,setUser] = useState(getLocalUser())
//   const [filteredUser,setFilteredUser] = useState();
//   const {accountinformation,address,benefitsserviceprovidersid,contactperson,contactno,email,serviceprovidertypeid,serviceprovidertypenameid} = param;
console.log(param)
   
//  let singleUser =  param.filter((user)=>{
//     return user.userid == id;
//   })
  // console.log(singleUser);

  useEffect(()=>{
    // loadUsers();
}, [])

// const loadUsers = async () => {

//   //alert( id )
//      await axios.get("http://10.2.151.40/mis/api/BSPAPI").then(response => {
//              debugger;
             
             
//              //console.log((response.data).tbldata)
//              JSON.parse(response.data).tbldata.filter((res)=>{
//                if(res.benefitsserviceprovidersid  == id){
//                  console.log(res)
//                  debugger;

//                 setUser({id : res.benefitsserviceprovidersid,
//                 email:res.Email,
//                 address:res.Address,
//                 contactperson:res["Contact Persson"],
//                 contactno:res["Contact No"], 
//                 serviceprovidertypeid:res.serviceprovidertypeid,
//                 serviceprovidertypenameid:res.serviceprovidertypeid , 
//                 accountinformation:res["Account Information"]})

   
//                  //setUser(JSON.parse(res))
            

//                }
//              })
//           })
//    // setUser(result.data.reverse())
                   
//    // setUser(JSON.parse(result.data).tbldata)
    
// }

    return (
        <>
        <div className="container-fluid">
        <Link to="/userManagement" className="btn btn-primary mb-2 mt-2 float-end"> Back to User List</Link>
          <h1>{param[0].firstname} Details</h1>  

          <div>
             
             

          <ul class="list-group mb-3">
  <li class="list-group-item"><span>Name :</span> {param[0].firstname} {param[0].firstname}</li>
  <li class="list-group-item"><span>Contact No :</span> {param[0].contactno} </li>
  <li class="list-group-item"><span>Email ID :</span> {param[0].email} </li>
  <li class="list-group-item"><span>Status :</span> {param[0].status} </li>
  <li class="list-group-item"><span>Username :</span> {param[0].username} </li>
  <li class="list-group-item"><span>Role :</span> {param[0].rolename} </li>


</ul>
</div>
          </div>
        </>
    )
}

export default ViewUser
