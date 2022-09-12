import React, { useState } from 'react'
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
            <button onClick={() => logout()}>Logout</button>
            <img />
            </>
          :
            <><button>Login</button>
            <button>Sign Up</button>
            </>  
        }
      </div>
    </header>
  )
}

export default Header