import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './Header.css'

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
    <header>
      <div id='headerLeft'>
        <h1>Top Eats</h1>
      </div>
      <div id='headerRight'>
        {
          user ?
            <>
            <Button variant='info' onClick={() => logout()}>Logout</Button>
            <img />
            </>
          :
            <><Button variant='info'>Login</Button>
            <Button variant='info'>Sign Up</Button>
            </>  
        }
      </div>
    </header>
  )
}

export default Header