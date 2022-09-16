import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

const restaurantPreview = ({ restaurant }) => {
  return (
    <Card style={{margin: '20px'}}>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>{restaurant.location.display_address[0]}, {restaurant.location.display_address[1]}</Card.Text>
        <Card.Text>
          <Link to={`/restaurant/${restaurant.id}`} state={{restaurant}}>
            <span>More Info</span>
          </Link>  
        </Card.Text>
      </Card.Body>
    </Card>
  ) 
}

export default restaurantPreview;