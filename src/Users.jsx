import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"

const getLocalUser = () =>{
    let userList = localStorage.getItem('allUsers');
   // console.log(userList)
    if(userList){
        return JSON.parse(localStorage.getItem('allUsers'))
    }else{
        return [];
    }
} 

const Users = () => {



    const [users, setUser] = useState(getLocalUser());
    const [role, setRole] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [showTable, setShowTable] = useState(false);

    const [param, setParam] = useState({
        RoleID: '',
        TextForSearch: '',
        CreatedBy: '71',
    })

    const { RoleID, TextForSearch, CreatedBy } = param;






    const inputChange = e => {



        setParam({ ...param, [e.target.name]: e.target.value })
    }

    const validate = (values) => {
        const errors = {};
        if (values.RoleID == 0) {

            errors.roleId = "Please select Role"
        }




        // if (!values.TextForSearch) {

        //     errors.textForSearch = "Text Field is Required"
        // }


        return errors;
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if (Object.keys(validate(param)).length === 0) {

            await axios.post("http://corp-sqldb/mis/api/UserFilterApi", param).then((result) => {
                debugger;
              
                if(JSON.parse(result.data).refcurtbl.length){
                    setFormErrors({})
                    setShowTable(true)
                    let filteredUser = JSON.parse(result.data).refcurtbl;
                    setUser(filteredUser)
                   // localStorage.setItem("allUsers", JSON.stringify(filteredUser))
                }
                

                if (result.data == "Email already exists. <br/>Kindly enter different email.") {
                    //  console.log(result.data)
                    setFormErrors({ email: "Email already exists." })

                }

                else if (result.data == "Contact No already exists. <br/>Kindly enter different Contact No.") {
                    // console.log(result.data)
                    setFormErrors({ contactno: "Contact No already exists." })

                } else if (result.data == "User created successfully") {
                    //  console.log(result.data)
                    setFormErrors({})
                    debugger;
                    //setUser(JSON.parse(result.data).refcurtbl)
                    alert("User Created Successfully")
                };
                //  console.log(user[0].ReturnValue);        
                // console.log( JSON.parse(result.data))
            })
                .catch((err) => { console.log(err.message) })

        }
        else {
            setFormErrors(validate(param))
            return;
        }







        //  history.push("/userManagement")


    }

    const deleteUser = async id => {
        // var users = {
        //     benefitsserviceprovidersid: id,
        //     action: 'delete',
        //     serviceprovidertypeid: 0,
        //     serviceprovidertypenameid: 0,
        //     accountinformation: '',
        //     address: '',
        //     contactperson: '',
        //     contactno: 0,
        //     email: ''
        // };

        // debugger;
        //alert(id);
        await axios.delete(`http://corp-sqldb/MIS/api/UserApi/${id}|${"71"}` )
       // await axios.post("http://10.2.151.40/mis/api/BSPAPI", users)

        //     alert(id);
        //     const headers = {

        //         "Content-Type": "application/json",

        //     } 
        //    await axios.delete(`http://10.2.151.40/mis/api/BSPAPI/tbldata/${id}`,{ headers: headers })
        //    console.log(`http://10.2.151.40/mis/api/BSPAPI/${id}`)

        // loadUsers();

        await axios.post("http://corp-sqldb/mis/api/UserFilterApi", param).then((result) => {
            // debugger;
            // console.log(JSON.parse(result.data).refcurtbl.length)
            if(JSON.parse(result.data).refcurtbl.length){
                setFormErrors({})
                setShowTable(true)
                setUser(JSON.parse(result.data).refcurtbl)
            }
        })
        
    }


    useEffect(() => {
        //  loadUsers();
        localStorage.setItem("allUsers", JSON.stringify(users))
        loadRoles();
    }, [users])

    // const loadUsers = async () => {
    //     await axios.get("http://10.2.151.40/mis/api/BSPAPI").then((result) => {
    //         setUser(JSON.parse(result.data).tbldata)
    //     })
    //     // setUser(result.data.reverse())
    //     //   setUser(JSON.parse(result.data).tbldata)
    //     //   setUser(JSON.parse(result.data).tbldata)


    // }

    const loadRoles = async () => {
        await axios.get("http://corp-sqldb/MIS/api/MobileRoleapi").then((result) => {
            setRole(JSON.parse(result.data).refcurtbl)
        })
        // setUser(result.data.reverse())
        //   setUser(JSON.parse(result.data).tbldata)

    }


    return (
        <>
            <div className="container-fluid">

                <Link to="/users/Add" className="btn btn-primary mb-2 mt-2 float-end"> Add user </Link>
                <h1>Manage User</h1>

                <form onSubmit={e => onSubmit(e)}>
                    <div class="card bg-light border p-2 mb-3">
                        <div className='row'>

                            <div className="col-sm-4">


                                <div className="form-group required ">
                                    <label className="form-label">Role</label>
                                    <select className="form-select" name="RoleID" value={RoleID} onChange={e => inputChange(e)} >
                                        <option value="0">Select Role</option>
                                        {
                                            role.map((curElem) => (
                                                <option value={curElem.roleid}>{curElem.rolename}</option>
                                            ))
                                        }

                                    </select>

                                    <small id="emailHelp"
                                        className="form-text text-danger ">{formErrors.roleId}</small>


                                </div>
                            </div>

                            <div className="col-sm-4">


                                <div className="form-group  ">
                                    <label className="form-label">Text Search</label>
                                    <input type="text"
                                        className="form-control"
                                        name="TextForSearch"
                                        placeholder="Enter your Text"
                                        value={TextForSearch}

                                        onChange={e => inputChange(e)} />
                                    {/* <small id="emailHelp"
                                        className="form-text text-danger ">{formErrors.textForSearch}</small> */}
                                </div>

                            </div>
                            <div className='col-sm-2'>
                                <div className="form-group  ">
                                    <label className="form-label d-block">&nbsp;</label>
                                    <button className="btn  btn-dark mb-3 "> Submit </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
                { showTable ? 
                    <table className="table table-striped  border shadow">
                        <thead className="table-light">
                            <tr>
                                {/* <th>#</th> */}

                                <th>Name</th>
                                <th>Role</th>
                                <th>Email ID</th>

                                <th>Contact No</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((curElem, index) => (

                                    <tr key={index}>
                                        {/* <td>{curElem.serviceprovidertypeid}</td> */}
                                        <td>{curElem.firstname} {curElem.lastname}</td>
                                        <td>{curElem.rolename} </td>
                                        <td>{curElem.email}</td>

                                        <td>{curElem.contactno}   </td>


                                        <td>
                                            <Link className="btn btn-sm btn-primary mx-1" to={`/viewUsers/${curElem.userid}`} ><i className="far fa-eye"></i> </Link>
                                            {/* <Link className="btn  btn-sm btn-dark mx-1" to={`/users/Edit/${curElem.benefitsserviceprovidersid}`} ><i className="far fa-edit"></i> </Link> */}

                                            { curElem.status == "Active" ? <Link className="btn  btn-sm btn-dark mx-1" to={`/users/Edit/${curElem.userid}` } ><i class="far fa-edit"></i></Link>: ""} 
                                            <Link className="btn  btn-sm btn-danger mx-1" to="/userManagement" onClick={() => deleteUser(curElem.userid)}>{ curElem.status == "In-Active" ? <i class="far fa-toggle-off"></i>: <i class="far fa-toggle-on"></i>} </Link>
                                            {/* <Link className="btn  btn-sm btn-danger mx-1" to="/userManagement" onClick={() => deleteUser(curElem.rolename)}><i className="far fa-trash"></i> </Link> */}
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
               : "" }
            </div>
        </>
    )
}

export default Users
