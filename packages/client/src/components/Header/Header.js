import React, { useState } from 'react'
import { Button, Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap'

const Header = () => {

  const [user, setUser] = useState(
    {
      firstName: 'Bob',
      lastName: 'Smith',
      userName: 'bobster'
    })

  const logout = () => {
    setUser(null)
  }

  return (
    <Navbar bg='secondary' variant='dark'>
      <Container fluid='lg' style={{maxWidth: '1024px'}}>
        <Navbar.Brand>Top Eats</Navbar.Brand>
        {
          user ?
          <Nav className='justify-content-end'>
              <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>      
              <Image />
            </Nav>
          :
          <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link>Sign Up</Nav.Link>
            </Nav>  
        }
      </Container>
    </Navbar>   
  )}

export default Header