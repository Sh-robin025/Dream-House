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
                            <Link href="/" className="nav-item"><b>Home</b></Link>
                            <Link href="" className="nav-item"><b>About</b></Link>
                            <Link href="" className="nav-item"><b>Service</b></Link>
                            <Link href="" className="nav-item"><b>Concerns</b></Link>
                            <Link href="" className="nav-item"><b>Event</b></Link>
                            <Link href="" className="nav-item"><b>Contact</b></Link>
                        </Nav>
                    </Navbar.Collapse>
                    <button>
                        <b>Login</b>
                    </button>
                </Container>
            </Navbar>
        </NaVBarStyle>
    );
};

export default NavBar;