import React, { useContext } from "react";
import { Navbar, Nav, Container, Image, Dropdown } from "react-bootstrap";
import logo from "../Images/logo.png";
import NaVBarStyle from "../Styles/NavBarStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector(state => state.user.loggedInUser)
  console.log(user)

  return (
    <NaVBarStyle>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={logo} className="img-fluid" alt=""/>
            <b>
              <span> D</span>ream-<span>H</span>ouse
            </b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="nav-item">
                <b>Home</b>
              </Link>
              <Link to="" className="nav-item">
                <b>About</b>
              </Link>
              <Link to="" className="nav-item">
                <b>Service</b>
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
            {
              user ? (
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <b>{user.displayName}</b>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <div className="d-flex justify-content-center">
                        <Image src={user.photoURL} className="img-fluid" roundedCircle alt=""/>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item className="text-center"><b>logout</b></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="login">
                  <button><b>Login</b></button>
                </Link>

              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NaVBarStyle>
  );
};

export default NavBar;
// refreshToken: eyJuYW1lIjoiU2hhaGFkYXQgUm9iaW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2hGSzhsYm8zT1BEeTdZVWphYjczcFkxdm1fcXJwSUVGZEdyczNNemc9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZHJlYW0taG91c2UtYTBkNGIiLCJhdWQiOiJkcmVhbS1ob3VzZS1hMGQ0YiIsImF1dGhfdGltZSI6MTYyMzA5ODQ3NiwidXNlcl9pZCI6Ijh0aGtjM2ZPTXZoa2pSWWJrdW51OGFuc3RqcDEiLCJzdWIiOiI4dGhrYzNmT012aGtqUllia3VudThhbnN0anAxIiwiaWF0IjoxNjIzMDk4NDc2LCJleHAiOjE2MjMxMDIwNzYsImVtYWlsIjoic2gucm9iaW4wMjVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDE3ODM2MjYwNDI1ODkzNzI2NDEiXSwiZW1haWwiOlsic2gucm9iaW4wMjVAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.hDJ2boImJUPM5LQJ2TenNPQh3V4baHfwWssxZb1VtgWr70e9Rc-sK5h7Xz_1pr_nhcHduX0HLL6LomWVEazhpaETrAfj1q3tfYJtjkoUoqw3J-pYcnodO0rsdD2vq0umBalNau0SP9TycR95LFqWLjLIAiCDVoqf4IpzCCNTE34mfSxI1MI56-dtVXz8rfWFxv47OqUxboHG6WAJrxXVRyX94Vp9NbP_SeACNMkMwssRTgAXOXbe2zkr4DZbeb8m93twn_dN_idDCwe2tmSALmL1VEsx-R9BVb23vRHZa66stP3SmF-YEtYLvDDNLaFJJwb8ekuy8-XjQ_5MpDBYBg"


