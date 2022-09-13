import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import RestaurantResults from "../components/RestaurantResults/RestaurantResults";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);


  return (
    <>
      <Header />
      <SearchBar restaurants={restaurants} setRestaurants={setRestaurants}/>
      <h2>Restaurant List</h2>
      <RestaurantResults  restaurants={restaurants}/>
        {/* Map through the restaurants and render individual restaurantPreview components */}
    </>
  );
};

export default HomePage;
