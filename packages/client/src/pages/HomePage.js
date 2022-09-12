import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import RestaurantResults from "../components/RestaurantResults/RestaurantResults";

const HomePage = () => {
  return (
    <>
      <Header />

      <SearchBar />
      {/* The restaurantList and individual restaurantPreview will be separant components */}
      <div>
        <h2>Restaurant List</h2>
        <RestaurantResults />
        {/* Map through the restaurants and render individual restaurantPreview components */}
      </div>
    </>
  );
};

export default HomePage;
