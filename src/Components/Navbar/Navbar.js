/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Navbar1 = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="my-nav mb-5">
            <Navbar bg="" variant="dark" expand="lg" >
            <Navbar.Brand href="#home" className='ml-md-5 nav-name  '> <Link  className='text-warning' to="/"><b>AKHLAQUE</b></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto " variant="dark">  
                    <Link to="/" className="nav-link mr-4">Home</Link>
                    <Link to="/about" className="nav-link mr-4" >About</Link>
                    <Link to="/portfolio" className="nav-link mr-4">Portfolio</Link>
                    <Link to="/blogs" className="nav-link mr-4">Blogs</Link>
                    <Link to="/contact" className="nav-link mr-4" > Contact</Link>
                       
                    <a target='_blank' href='https://drive.google.com/file/d/13N5JL0WlUuRNJZbhECicuGHDRbeaSG6M/view'> <button className='btn  bg-warning px-4 mr-md-5 '><FontAwesomeIcon icon={faDownload} size="1x" /> Resume</button></a>  
                   
                   
                </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbar1;