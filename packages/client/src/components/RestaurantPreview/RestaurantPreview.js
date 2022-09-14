import React from "react";
import './RestaurantPreview.css'

// Needs to take in prop from RestaurantResultsList component
const restaurantPreview = ({ restaurant }) => {
    return (
        <div id="preview">
          {/* <img src={restaurant.image_url} /> */}
          <h2>{restaurant.name}</h2>
          <h3>
            <span>{restaurant.location.display_address[0]}, </span>
            <span>{restaurant.location.display_address[1]}</span>
          </h3>
        </div>
    ) 
}

export default restaurantPreview;