import React from 'react';
import { Button, Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUpHeader = () => {
    return (
        <Navbar bg="secondary" variant="dark">
            <Container fluid="lg">
                <Navbar.Brand as={Link} to="/">Top Eats</Navbar.Brand>
                <Nav className='justify-content-end'>
                    <Nav.Link as={Link} to='/'>Sign Up</Nav.Link>
                    <Nav.Link as={Link} to='/signin'>Sign In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default SignUpHeader;