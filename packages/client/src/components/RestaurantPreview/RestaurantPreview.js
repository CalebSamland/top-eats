import React from "react";

// Needs to take in prop from RestaurantResultsList component
const restaurantPreview = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.location}</h3>
            <h3>{props.url}</h3>
        </div>
    )
}

export default restaurantPreview;