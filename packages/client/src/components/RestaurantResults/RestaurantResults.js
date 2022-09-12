import React from "react";
import "./RestaurantResults.css";

//Sample Data
const data = [
  {
    id: 1,
    name: "Wendy's",
    street: "123 Earth Rd",
    city: "Charlotte",
    state: "NC",
    zip: "27499",
    url: "http://www.wendys.com",
  },
  {
    id: 2,
    name: "McDonalds",
    street: "325 Pulto St",
    city: "Raliegh",
    state: "NC",
    zip: "27276",
    url: "http://www.mcdonalds.com",
  },
  {
    id: 3,
    name: "Burger King",
    street: "994 Mars Ln",
    city: "Greenville",
    state: "NC",
    zip: "27884",
    url: "http://www.burgerking.com",
  },
  {
    id: 4,
    name: "Canes",
    street: "773 Jupiter St",
    city: "Holly Springs",
    state: "NC",
    zip: "27887",
    url: "http://www.canes.com",
  },
  {
    id: 5,
    name: "Cook Out",
    street: "123 Venus Pkwy",
    city: "Wilmington",
    state: "NC",
    zip: "27441",
    url: "http://www.cookout.com",
  },
];

const RestaurantResults = () => {
  return (
    <div id="restaurant-list">
      {data.map((restaurant, i) => (
        <h3 key={i} className="restaurant">
          {`
        ${restaurant.name}
        ${restaurant.street}
        ${restaurant.city}, ${restaurant.state} ${restaurant.zip}
        ${restaurant.url}
        
        `}
        </h3>
      ))}
    </div>
  );
};

export default RestaurantResults;
