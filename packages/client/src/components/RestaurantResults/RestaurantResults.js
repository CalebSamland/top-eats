import React from "react";
import "./RestaurantResults.css";
import RestaurantPreview from '../RestaurantPreview/RestaurantPreview'


const RestaurantResults = ({ restaurants }) => {
  return (
    <div id="restaurant-list">
      {restaurants.map((restaurant, i) => (
        <RestaurantPreview restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantResults;
