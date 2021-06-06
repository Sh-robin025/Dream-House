import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Images/logo.png";
import NaVBarStyle from "../Styles/NavBarStyle";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <NaVBarStyle>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img
              src={logo}
              className="img-fluid"
              style={{ height: "40px" }}
              alt=""
            />
            <b>
              <span> D</span>ream-<span>H</span>ouse
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/home" className="nav-item">
                <b>Home</b>
              </Link>
              <Link to="" className="nav-item">
                <b>About</b>
              </Link>
              <Link to="" className="nav-item">
                <b>Service</b>
              </Link>
              <Link to="" className="nav-item">
                <b>Concerns</b>
              </Link>
              <Link to="" className="nav-item">
                <b>Event</b>
              </Link>
              <Link to="" className="nav-item">
                <b>Contact</b>
              </Link>
              <Link to="/dashboard" className="nav-item">
                <b>Dashboard</b>
              </Link>
            </Nav>
            <Link to="/login" className="nav-item">
              {loggedInUser.displayName === undefined ? (
                <b>Login</b>
              ) : (
                loggedInUser.displayName
              )}
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NaVBarStyle>
  );
};

export default NavBar;
