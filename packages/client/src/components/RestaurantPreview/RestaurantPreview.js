import React from "react";
import './RestaurantPreview.css'

// Needs to take in prop from RestaurantResultsList component
const restaurantPreview = ({ restaurant }) => {
    return (
        <div id="preview">
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.location.display_address}</h3>
        </div>
    ) 
}

export default restaurantPreview;