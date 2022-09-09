import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar';

const HomePage = () => {
  return (<>

  {/* The header will be a separate component */}
    <header>
      <h1>Top Eats</h1>
      <nav>Login / Signup / Profile Image</nav>
    </header>
    
    <SearchBar />

  {/* The restaurantList and individual restaurantPreview will be separant components */}
    <div>
      <h2>Restaurant List</h2>
      {/* Map through the restaurants and render individual restaurantPreview components */}
      <div>Restaurant Name, Location, Website Link</div>
    </div>

  
  </>)
}

export default HomePage