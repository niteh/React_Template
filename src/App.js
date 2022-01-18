import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import {  Switch, Route, Redirect } from "react-router";
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Service from "./Service"
import Contact from "./Contact"
import Footer from "./Footer"
import CovidTable from "./CovidTable/CovidTable";
import Table from "./Table";
import Users from "./Users";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";
import Roles from "./Roles";
import AddRole from "./components/roles/AddRole";
import ViewRole from "./components/roles/ViewRole";
import EditRole from "./components/roles/EditRole";
import { Employee } from './components/Employee';
import Dashboard from "./Dashboard";
import MapViewer from "./MapViewer"
import Login from "./components/Login";
import SignUp from "./components/SignUp";




const App = () => {
  return (
    <>
    <div className='bg-light bg-gradient '>
    <Navbar />
    <Switch>

      <Route exact path="/" component ={Home} />
      <Route exact path="/about" component ={About} />
      <Route exact path="/service" component ={Service} />
      <Route exact path="/contact" component ={Contact} />
      <Route exact path="/covid" component ={CovidTable} />
      <Route exact path="/table" component ={Table} />
      <Route exact path="/dashboard" component ={Dashboard} />
      <Route exact path="/mapviewer" component ={MapViewer} />
      <Route exact path="/userManagement" component ={Users} />
      <Route exact path="/roleManagement" component ={Roles} />
      <Route exact path="/roles/AddRole" component={AddRole} />
      <Route exact path="/roles/Edit/:id" component={EditRole} />
      <Route exact path="/users/Add" component={AddUser} />
      <Route exact path="/users/Edit/:id" component={EditUser} />
      <Route exact path="/viewUsers/:id" component={ViewUser} />
      <Route exact path="/viewRole/:id" component={ViewRole} />
      <Route exact path="/Employee" component={Employee} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />

      <Redirect to="/" />
      

    </Switch>
  
      

    <Footer />
    </div>
    </>
  );
}

export default App;
