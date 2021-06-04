import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../Images/logo.png';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="img-fluid" style={{height:'40px'}} alt="" />
                    <b> Dream-House</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/"><b>Home</b></Nav.Link>
                        <Nav.Link href="#link"><b>About</b></Nav.Link>
                        <Nav.Link href="#link"><b>Service</b></Nav.Link>
                        <Nav.Link href="#link"><b>Concerns</b></Nav.Link>
                        <Nav.Link href="#link"><b>Event</b></Nav.Link>
                        <Nav.Link href="#link"><b>Contact</b></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button>Login</button>
            </Container>
        </Navbar>
    );
};

export default NavBar;