import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom'


const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [param, setUser] = useState({
    accountinformation: '',
    action: 'insert',
    address: '',
    benefitsserviceprovidersid: "",
    contactno: '',
    email: '',
    serviceprovidertypeid: '',
    serviceprovidertypenameid: ''
  })
  const { accountinformation, action, address, benefitsserviceprovidersid, contactno, email, serviceprovidertypeid, serviceprovidertypenameid } = param;

  const inputChange = e => {
    setUser({ ...param, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();


    // await axios.post("http://10.2.151.40/mis/api/BSPAPI", param)
    debugger;

    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'Account Information': "AcountInfo",
      'Address': param.address,
      'Contact No': param.contactno,
      'Contact Person': "Ashish",
      'email': param.email,
      'Service Provider Name': "abc",
      'Service Provider Type': 'efg',
      'benefitsserviceprovidersid': param.id,
      'serviceprovidertypeid': param.serviceprovidertypeid,
      'serviceprovidertypenameid': param.serviceprovidertypenameid,
      'action': 'update'
    });
    var config = {
      method: 'post',
      url: 'http://10.2.151.40/mis/api/BSPAPI',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      }).catch(function (error) {
        console.log(error);
      });



    history.push("/userManagement")

  }


  useEffect(() => {

    loadUsers();
  }, [])

  const loadUsers = async () => {

    //alert( id )
    await axios.get("http://10.2.151.40/mis/api/BSPAPI").then(response => {
      debugger;


      //console.log((response.data).tbldata)
      JSON.parse(response.data).tbldata.filter((res) => {
        if (res.benefitsserviceprovidersid == id) {
          console.log(res)
          debugger;

          setUser({


            id: res.benefitsserviceprovidersid,
            action: 'update',
            email: res.Email,
            address: res.Address,
            contactperson: res["Contact Person"],
            contactno: res["Contact No"],
            serviceprovidertypeid: res.serviceprovidertypeid,
            serviceprovidertypenameid: res.serviceprovidertypenameid,
            accountinformation: res["Account Information"]
          })
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
        <h1>Edit User</h1>

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
                  onChange={e => inputChange(e)} />
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
                  onChange={e => inputChange(e)} />
              </div>
            </div>
            <div className="col-sm-4 d-none">
              <div className="mb-3">
                <label className="form-label">Benefits Serviceproviders Id</label>
                <input type="text"
                  className="form-control"
                  name="benefitsserviceprovidersid"
                  placeholder="Enter your Benefits Serviceproviders Id"
                  value={benefitsserviceprovidersid}
                  onChange={e => inputChange(e)} />
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
                  onChange={e => inputChange(e)} />
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
                  onChange={e => inputChange(e)} />
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
                  onChange={e => inputChange(e)} />
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
                  onChange={e => inputChange(e)} />
              </div>
            </div>

          </div>

          <div>
            <button className="btn btn-primary mb-3"> Update user</button>
          </div>

        </form>

      </div>
    </>
  )
}

export default EditUser
