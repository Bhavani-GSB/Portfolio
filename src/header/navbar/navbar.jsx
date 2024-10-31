import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import "./navbar.style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import Logo from '../assets/Logo.webp';

export const NavFunction = () => {
    return (
        <Navbar bg="black" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home" className='p-4 mx-0'><img src={Logo} height={49}></img></Navbar.Brand>
                <Nav className="gap-3 mx-auto">
                    <Nav.Link href="#home" className='text-light' style={{color:'#FE4C02'}}>Home</Nav.Link>
                    <Nav.Link href="#driver" className='text-light'>Driver for raft wheel</Nav.Link>
                    <Nav.Link href="#about" className='text-light'>About Us</Nav.Link>
                    <Nav.Link href="#solution" className='text-light'>Solution</Nav.Link>
                    <Nav.Link href="#blog" className='text-light'>Blog</Nav.Link>
                    <Nav.Link href="#careers" className='text-light'>Careers</Nav.Link>
                </Nav>
                <div className="d-flex mx-auto">
                    <Button className='contact'>Contact Us</Button>
                </div>
            </Container>
        </Navbar >
    );
}

