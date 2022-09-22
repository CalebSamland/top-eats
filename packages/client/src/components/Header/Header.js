import React, { useState } from 'react'
import { Button, Container, Image, Navbar, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ user, setUser }) => {

  console.log({user})



  // const [user, setUser] = useState(
  //   {
  //     firstName: 'Bob',
  //     lastName: 'Smith',
  //     userName: 'bobster'
  //   })

  const logout = () => {
    setUser(null)
  }



  return (
    <Navbar bg='secondary' variant='dark'>
      <Container fluid='lg' style={{maxWidth: '1024px'}}>
        <Navbar.Brand as={Link} to='/'>Top Eats</Navbar.Brand>
        {
          (user === false) ?
          <Nav className='justify-content-end'>
              <Nav.Link onClick={()=>logout()}>Logout</Nav.Link>      
              <Image />
            </Nav>
          :
          <Nav>
              <Nav.Link><Link to={`/signin`}>Login</Link></Nav.Link>
              <Nav.Link><Link to={`/signup`}>Sign Up</Link></Nav.Link>
            </Nav>  
        }
      </Container>
    </Navbar>   
  )}

export default Header