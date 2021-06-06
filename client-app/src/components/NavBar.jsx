import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Images/logo.png';
import NaVBarStyle from '../Styles/NavBarStyle';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <NaVBarStyle>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} className="img-fluid" style={{ height: '40px' }} alt="" />
                        <b> <span> D</span>ream-<span>H</span>ouse</b>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-item"><b>Home</b></Link>
                            <Link to="/about" className="nav-item"><b>About</b></Link>
                            <Link to="#service" className="nav-item"><b>Service</b></Link>
                            <Link to="/Concerns" className="nav-item"><b>Concerns</b></Link>
                            <Link to="/Event" className="nav-item"><b>Event</b></Link>
                            <Link to="/Contact" className="nav-item"><b>Contact</b></Link>
                        </Nav>
                        <button>
                            <b>Login</b>
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </NaVBarStyle>
    );
};

export default NavBar;