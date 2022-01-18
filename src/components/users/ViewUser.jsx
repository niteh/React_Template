import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory, useParams,Link } from 'react-router-dom'

const ViewUser = () => {

  let history = useHistory();
  const {id} = useParams();

  
  
  const [param,setUser] = useState({
    benefitsserviceprovidersid: id,
    serviceprovidertypeid: "",
    serviceprovidertypenameid:"",
    accountinformation: "",
    address: "",
    contactperson: "",
    contactno: "",
    email: ""


    
  })
  const {accountinformation,address,benefitsserviceprovidersid,contactperson,contactno,email,serviceprovidertypeid,serviceprovidertypenameid} = param;



  useEffect(()=>{
    loadUsers();
}, [])

const loadUsers = async () => {

  //alert( id )
     await axios.get("http://10.2.151.40/mis/api/BSPAPI").then(response => {
             debugger;
             
             
             //console.log((response.data).tbldata)
             JSON.parse(response.data).tbldata.filter((res)=>{
               if(res.benefitsserviceprovidersid  == id){
                 console.log(res)
                 debugger;

                setUser({id : res.benefitsserviceprovidersid,
                email:res.Email,
                address:res.Address,
                contactperson:res["Contact Persson"],
                contactno:res["Contact No"], 
                serviceprovidertypeid:res.serviceprovidertypeid,
                serviceprovidertypenameid:res.serviceprovidertypeid , 
                accountinformation:res["Account Information"]})

   
                 //setUser(JSON.parse(res))
            

               }
             })
          })
   // setUser(result.data.reverse())
                   
   // setUser(JSON.parse(result.data).tbldata)
    
}

    return (
        <>
        <div className="container-fluid">
        <Link to="/userManagement" className="btn btn-primary mb-2 mt-2 pull-right"> Back to User List</Link>
          <h1>{param.name}</h1>  

          <div>
          <ul class="list-group">
  <li class="list-group-item"><span>Account Information :</span> {accountinformation}</li>
  <li class="list-group-item"><span>address :</span> {address}</li>
  <li class="list-group-item"><span>Contact Person :</span> {contactperson}</li>
  <li class="list-group-item"><span>Contact No :</span> {contactno}</li>
  <li class="list-group-item"><span>Service Provider Type Id :</span> {serviceprovidertypeid}</li>
  <li class="list-group-item"><span>Service provider Type Name Id:</span> {serviceprovidertypenameid}</li>
  <li class="list-group-item"> <span>Email :</span> {email}</li>

</ul>
</div>
          </div>
        </>
    )
}

export default ViewUser
