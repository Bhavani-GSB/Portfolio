import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./assets/Bhavani.png";
import { Link } from 'react-scroll';
import "../App.css";

export const NavFunction = () => {
    return (
        <ul style={{display: 'flex', listStyle: 'none', justifyContent: 'space-evenly', padding: '30px', fontSize: '18px'}} className='sticky-top bg-black text-light'>
        <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
        <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
        <li><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
        <li><Link  to="education" spy={true} smooth={true}>Education</Link></li>
        <li><Link  to="experience" spy={true} smooth={true}>Experience</Link></li>
        </ul>
      )   
}

