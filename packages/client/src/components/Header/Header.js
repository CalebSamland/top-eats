import React, { useState } from 'react'
import { Button, Container, Image, Navbar, Nav } from 'react-bootstrap'
// import './Header.css'

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
      <Container>
        <Navbar.Brand className='justify-content-start'>Top Eats</Navbar.Brand>
      </Container>

      <Container className='justify-content-end'>
      {
        user ?
        <Nav>
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
  )
}

export default Header