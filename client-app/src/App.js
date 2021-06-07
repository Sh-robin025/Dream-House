import React, { createContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Reviews from "./components/Dashboard/Reviews/Reviews";
import AddMember from "./components/Dashboard/AddMember/AddMember";
import AddServices from "./components/Dashboard/AddServices/AddServices";
import ManageWeb from "./components/Dashboard/ManageWeb/ManageWeb";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "./Redux/actions/actions";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      dispatch(userLogin(JSON.parse(loggedInUser)))
    }
  }, [])

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/login" component={Login} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
        <PrivetRoute path="/dashboard">
          <Dashboard />
        </PrivetRoute>

        {/* <Route path="/review" component={Reviews}/>
        <Route path="/addMember" component={AddMember}/>
        <Route path="/addService" component={AddServices}/>
        <Route path="/manageWeb" component={ManageWeb}/> */}
      </Switch>
    </Router>
  );
}

export default App;
