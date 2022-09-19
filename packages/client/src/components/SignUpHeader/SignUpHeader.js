import React from 'react';
import { Button, Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUpHeader = () => {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container fluid="lg">
                <Navbar.Brand href='/'>Top Eats</Navbar.Brand>
                <Nav className='justify-content-end'>
                    <Nav.Link><Link to="/">Sign Up</Link></Nav.Link>
                    {/* <Nav.Link><Link to="/signin">Sign In</Link></Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default SignUpHeader;