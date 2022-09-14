import React from "react";
import RestaurantPreview from '../RestaurantPreview/RestaurantPreview'
import './RestaurantResults.css'


const RestaurantResults = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant, i) => (
        <RestaurantPreview restaurant={restaurant} key={i} />
      ))}
    </div>
  );
};

export default RestaurantResults;
