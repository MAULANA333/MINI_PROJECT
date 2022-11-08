import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Css/NavbarTop.css'
import logo from '../Img/logo.png'
import { Link } from "react-router-dom";


const NavbarTop = () => {
  return (
    <Container fluid className='p-2'>
        <Navbar className='navbar-top p-3'>
                <Col lg={10} sm={6}>
                <Navbar.Brand href="/">
                    <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Mister Kuliner
                </Navbar.Brand>
                </Col>
                <Col lg={2} sm={6} className='d-flex flex-row justify-content-evenly'>
                    <div >
                        <a href='/menu' className='text-n'>
                            Menu
                        </a>
                    </div>
                    <div className='text-n'>
                        <a href='/recipe' className='text-n'>
                            Receipe
                        </a>
                    </div>
                </Col>
        </Navbar>
    </Container>
    
  )
}

export default NavbarTop