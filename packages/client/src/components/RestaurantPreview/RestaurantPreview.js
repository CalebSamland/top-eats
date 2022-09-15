import React from "react";
import { Card } from "react-bootstrap";

const restaurantPreview = ({ restaurant }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>{restaurant.location.display_address[0]}, {restaurant.location.display_address[1]}</Card.Text>
      </Card.Body>
    </Card>
  ) 
}

export default restaurantPreview;