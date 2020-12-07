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
            <Navbar.Brand href="#home" > <Link className='ml-md-5 nav-name '  to="/"><b> AKHLAQUE</b></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto " variant="dark">  
                    <Link to="/" className="nav-link  px-3">Home</Link>
                    <Link to="/about" className="nav-link px-3" >About</Link>
                    <Link to="/portfolio" className="nav-link px-3">Portfolio</Link>
                    <Link to="/blogs" className="nav-link px-3">Blogs</Link>
                    <Link to="/contact" className="nav-link px-3 mr-4" > Contact</Link>
                       
                    <a target='_blank' href='https://drive.google.com/file/d/1odMgrcA2yY0HADwUbZ4Hb7K4EE_GRVwB/view'> <button className='btn px-4 mr-md-5 resume-btn'><FontAwesomeIcon icon={faDownload} size="1x" /> Resume</button></a>  
                                      
                </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbar1;