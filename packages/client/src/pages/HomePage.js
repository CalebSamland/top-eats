import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar';
import Header from '../components/Header/Header';

const HomePage = () => {
  return (<>
    <Header />
  
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