/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Navbar1 = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const [expanded, setExpanded] = useState(false);
    return (
        <div className="my-nav mb-5">
            <Navbar variant="dark" expand="lg" expanded={expanded} >
            <Navbar.Brand href="#home" > <Link className='ml-md-5 nav-name '  to="/"><b> AKHLAQUE</b></Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto " variant="dark">  
                    <Link to="/" className="nav-link  px-3" onClick={() => setExpanded(false)}>Home</Link>
                    <Link to="/about" className="nav-link px-3" onClick={() => setExpanded(false)} >About</Link>
                    <Link to="/portfolio" className="nav-link px-3" onClick={() => setExpanded(false)}>Portfolio</Link>
                    <Link to="/blogs" className="nav-link px-3" onClick={() => setExpanded(false)}>Blogs</Link>
                    <Link to="/contact" className="nav-link px-3 mr-4" onClick={() => setExpanded(false)}> Contact</Link>
                       
                    <a target='_blank' href='https://drive.google.com/file/d/1odMgrcA2yY0HADwUbZ4Hb7K4EE_GRVwB/view'> <button className='btn px-4 mr-md-5 resume-btn'><FontAwesomeIcon icon={faDownload} size="1x" /> Resume</button></a>  
                                      
                </Nav> 
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbar1;