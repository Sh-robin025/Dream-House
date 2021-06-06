import React, { createContext, useState } from "react";
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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/details/:id" component={Details} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/review">
            <Reviews></Reviews>
          </Route>
          <Route path="/addMember">
            <AddMember></AddMember>
          </Route>
          <Route path="/addService">
            <AddServices></AddServices>
          </Route>
          <Route path="/manageWeb">
            <ManageWeb></ManageWeb>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
